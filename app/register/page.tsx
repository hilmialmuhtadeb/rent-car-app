'use client'

import { registerUser } from "@/features/user/userApi"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [address, setAddress] = useState('')

  const router = useRouter()

  async function handleRegister() {
    const res = await registerUser({
      username,
      email,
      phoneNumber,
      password,
      city,
      zip,
      address
    })
    if (res.status === 200) {
      alert('Berhasil mendaftar')
      router.push('/login')
    } else {
      alert('Gagal mendaftar')
    }
  }

  
  return (
    <div className="container mx-auto mt-8">
      <Link href="/">
        <h1 className="font-extrabold text-center text-2xl mb-8">Rent Car App</h1>
      </Link>
      <div className="w-1/2 mx-auto">
        <h2 className="font-bold">Daftar Akun</h2>
        <div className="flex justify-center">
          <div className="w-1/2 pr-16">
            <div className="my-4">
              <label htmlFor="username" className="block mb-1">Username</label>
              <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full text-sm py-1 px-2 border border-black rounded-lg" />
            </div>
            <div className="my-4">
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full text-sm py-1 px-2 border border-black rounded-lg" />
            </div>
            <div className="my-4">
              <label htmlFor="phoneNumber" className="block mb-1">No. Telepon</label>
              <input type="number" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full text-sm py-1 px-2 border border-black rounded-lg" />
            </div>
            <div className="my-4">
              <label htmlFor="password" className="block mb-1">Password</label>
              <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full text-sm py-1 px-2 border border-black rounded-lg" />
            </div>
          </div>
          <div className="w-1/2 pr-16">
            <div className="my-4">
              <label htmlFor="city" className="block mb-1">Kota</label>
              <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} className="w-full text-sm py-1 px-2 border border-black rounded-lg" />
            </div>
            <div className="my-4">
              <label htmlFor="zip" className="block mb-1">Kode Pos</label>
              <input type="number" id="zip" value={zip} onChange={(e) => setZip(e.target.value)} className="w-full text-sm py-1 px-2 border border-black rounded-lg" />
            </div>
            <div className="my-4">
              <label htmlFor="address" className="block mb-1">Alamat</label>
              <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full text-sm py-1 px-2 border border-black rounded-lg" />
            </div>
            <div className="my-4 flex justify-end">
              <button
                className="text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-1"
                onClick={() => handleRegister()}
              >Daftar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register