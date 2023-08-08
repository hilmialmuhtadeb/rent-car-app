'use client'

import { loginAdmin, storeAdminTokenToLocalDB } from "@/features/user/userApi"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { useDispatch } from "react-redux"

const AdminLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const router = useRouter()

  function handleLogin() {
    loginAdmin({ email, password })
      .then(res => {
        dispatch({ type: 'auth/login' })
        dispatch({ type: 'auth/setAdmin', payload: true })
        storeAdminTokenToLocalDB(res.data.token)
        toast.success('Berhasil login sebagai admin')
        router.push('/admin')
      })
      .catch(err => {
        toast.error(err.response.data.error)
      })
  }

  useEffect(() => {
    if (localStorage.getItem('adminToken')) {
      router.push('/admin')
    }
  })
  
  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
      <Link href="/">
        <h1 className="font-extrabold text-2xl mb-8">Rent Car App</h1>
      </Link>
      <div className="p-8 border">
        <h2 className="text-center font-bold">Admin Login</h2>
        <div className="my-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} id="email" className="text-sm p-1 w-64 border rounded-lg" />
        </div>
        <div className="my-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} id="password" className="text-sm p-1 w-64 border rounded-lg" />
        </div>
        <div className="my-4">
          <button className="mx-auto text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-1" onClick={handleLogin}>Masuk</button>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin