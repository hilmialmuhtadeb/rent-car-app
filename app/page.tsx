import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-8">
          <div className="w-2/5">
            <h1 className='text-5xl font-black leading-normal'>Persewaan Mobil <span className='text-red-500'>Premium</span> di Jakarta Telah Hadir.</h1>
            <p className='my-8 font-medium leading-normal'>Selamat datang di layanan rental mobil premium terbaik di Jakarta! Nikmati kemewahan berkendara dengan armada mobil berkualitas tinggi dan pelayanan profesional. Hubungi kami sekarang untuk pengalaman tak terlupakan!</p>
            <Link href='/car' className='underline font-semibold'>Cari Mobil</Link>
          </div>
          <div className='w-3/5 ml-32'>
            <img src='car.jpg' alt="Ford Ranger" className='w-100 object-contain' />
          </div>
        </div>
      </div>
    </>
  )
}
