import { rupiah } from '@/features/utils'
import React from 'react'
import { Car } from '@/types/Car'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface CarInfoProps {
  car: Car,
  setIsOrderFormVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const CarInfo: React.FC<CarInfoProps> = ({ car, setIsOrderFormVisible }) => {
  const router = useRouter()
  
  function openOrderForm() {
    const token = localStorage.getItem('token')
    
    if (!token) {
      toast.error('Anda harus login terlebih dahulu.')
      router.push('/login')
      return
    }

    setIsOrderFormVisible(true)
  }
  
  return (
    <div className="container mx-auto px-32">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <img
            src={`http://localhost:8080/images/${car.image}`}
            alt={car.name}
            className="h-96 w-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{car.name}</h1>

          <table>
            <tbody>
              <tr>
                <td className='pr-4'>Tipe</td>
                <td>: {car.type}</td>
              </tr>
              <tr>
                <td className='pr-4'>Bahan bakar</td>
                <td>: {car.fuel}</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-4 mb-8">
            <h3>Harga</h3>
            <p className="font-bold">{rupiah(car.hourRate)} / jam</p>
            <p className="font-bold">{rupiah(car.dayRate)} / hari</p>
            <p className="font-bold">{rupiah(car?.monthRate)} / bulan</p>
          </div>

          <div className="my-4">
            <button
              className='bg-gray-500 text-white text-sm font-bold px-8 py-2'
              onClick={openOrderForm}
            >Sewa Mobil</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarInfo