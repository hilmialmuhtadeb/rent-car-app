import Link from "next/link"

const AdminLogin = () => {
  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
      <Link href="/">
        <h1 className="font-extrabold text-2xl mb-8">Rent Car App</h1>
      </Link>
      <div className="p-8 border">
        <h2 className="text-center font-bold">Admin Login</h2>
        <div className="my-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" name="email" id="email" className="w-64 border rounded-lg" />
        </div>
        <div className="my-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input type="password" name="password" id="password" className="w-64 border rounded-lg" />
        </div>
        <div className="my-4">
          <button className="mx-auto text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-1">Masuk</button>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin