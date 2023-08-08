'use client'

import { RootState } from "@/app/store"
import { useSelector, useDispatch } from "react-redux"
import { removeTokenFromLocalDB } from "@/features/user/userApi"
import Link from "next/link"

const Navbar = () => {
  const profile = useSelector((state: RootState) => state.user.profile)
  const isLogin = useSelector((state: RootState) => state.auth.isLogin)

  const dispatch = useDispatch()

  function handleLogout() {
    removeTokenFromLocalDB()
    dispatch({ type: 'auth/logout' })
    dispatch({ type: 'user/resetProfile' })
  }

  return (
    <nav className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="mr-8">
            <h1 className="text-xl font-extrabold">Rent Car App</h1>
          </Link>
          <Link href="/car">
            <p className="ml-4">Mobil</p>
          </Link>
        </div>
        <div>
          { isLogin ? (
            <div className="flex">
              <p>{ profile.username }</p>
              <span className="mx-4">|</span>
              <button onClick={handleLogout} className="decoration-red-500 underline underline-offset-2">Logout</button>
            </div>
          ) : (
            <Link href="/login">
              <button className="border border-black border-4 py-1 px-4 text-sm font-bold hover:text-white hover:bg-black">
                  Masuk
              </button>
            </Link>
          ) }
        </div>
      </div>
    </nav>
  )
}

export default Navbar