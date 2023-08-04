'use client'

import Link from "next/link"
import { toast } from "react-hot-toast/headless"

const Login = () => {
  function createToast() {
    toast.success('Berhasil mendaftar akun')
  }

  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
      <Link href="/">
        <h1 className="font-extrabold text-2xl mb-8">Rent Car App</h1>
      </Link>
      <div className="p-8 border border-2 border-black">
        <h2 className="text-center font-bold">Login</h2>
        <div className="my-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" name="email" id="email" className="w-64 text-sm py-1 px-2 border border-black rounded-lg" />
        </div>
        <div className="my-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input type="password" name="password" id="password" className="w-64 text-sm py-1 px-2 border border-black rounded-lg" />
        </div>
        <div className="my-4 text-center">
          <button className="mx-auto text-sm bg-black text-white px-4 py-1">Masuk</button>
        </div>
        <div className="mb-4 mt-8">
          <p className="text-sm">Belum punya akun? <Link href="/register" className="text-blue-500">Daftar</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login