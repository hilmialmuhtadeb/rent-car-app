import Link from "next/link"

const Navbar = () => {
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
          <button className="border border-black border-4 py-1 px-4 text-sm font-bold hover:text-white hover:bg-black">
            <Link href="/login">
              Masuk
            </Link>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar