'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { getUserProfile, loginUser, storeTokenToLocalDB } from "@/features/user/userApi"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import { useDispatch } from "react-redux"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()
  const dispatch = useDispatch()

  function getUser() {
    getUserProfile()
      .then(res => {
        const payload = {
          id: res.data.user.id,
          username: res.data.user.username,
          email: res.data.user.email,
          phoneNumber: res.data.user.phoneNumber,
          city: res.data.user.city,
          zip: res.data.user.zip,
          address: res.data.user.address,
        }
        dispatch({ type: 'user/setProfile', payload })
      })
      .catch(() => {
        toast.error('Failed to get user profile')
      })
  }

  function handleLogin() {
    loginUser({ email, password })
      .then(res => {
        storeTokenToLocalDB(res.data.token)
        dispatch({ type: 'auth/login' })
        getUser()
        router.push('/')
      })
      .catch(err => {
        toast.error(err.response.data.error)
      })
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/')
    }
  }, [])

  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
      <Link href="/">
        <h1 className="font-extrabold text-2xl mb-8">Rent Car App</h1>
      </Link>
      <div className="p-8 border border-2 border-black">
        <h2 className="text-center font-bold">Login</h2>
        <div className="my-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-64 text-sm py-1 px-2 border border-black rounded-lg" />
        </div>
        <div className="my-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} className="w-64 text-sm py-1 px-2 border border-black rounded-lg" />
        </div>
        <div className="my-4 text-center">
          <button className="mx-auto text-sm bg-black text-white px-4 py-1" onClick={handleLogin}>Masuk</button>
        </div>
        <div className="mb-4 mt-8">
          <p className="text-sm">Belum punya akun? <Link href="/register" className="text-blue-500">Daftar</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login