import { createOrder } from '@/features/order/orderApi'
import { rupiah } from '@/features/utils'
import { Car } from '@/types/Car'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'
import { toast } from 'react-hot-toast'

interface HourTabContentProps {
  car: Car
}

const HourTabContent: React.FC<HourTabContentProps> = ({ car }) => {
  const timeInputRef = useRef<HTMLInputElement | null>(null);

  const [hour, setHour] = useState(1)
  const [pickupDate, setPickupDate] = useState<Date | null>(null)
  const [pickupTime, setPickupTime] = useState<string>('')
  const [pickupLocation, setPickupLocation] = useState<string>('')
  const [dropoffLocation, setDropoffLocation] = useState<string>('')

  const minPickupDate = new Date()

  const isAllInputFilled = pickupDate && pickupTime && pickupLocation && dropoffLocation && hour

  const router = useRouter()

  const handleTimeChange = () => {
    if (timeInputRef.current) {
      const newValue = timeInputRef.current.value;
      setPickupTime(newValue);
    }
  };

  const handleConfirmOrder = () => {
    if (isAllInputFilled) {
      const dropoffDate = new Date(pickupDate?.getTime() + hour * 60 * 60 * 1000)
      
      createOrder({
        carId: car.id,
        pickupLocation,
        dropoffLocation,
        pickupDate: pickupDate?.toISOString().split('T')[0],
        dropoffDate: dropoffDate.toISOString().split('T')[0],
        pickupTime,
      })
      .then(res => {
        toast.success('Order berhasil dibuat')
        router.push('/order/successful')
      })
      .catch(err => {
        toast.error('Order gagal dibuat')
      })
    }
  }

  return (
    <>
      <div className='flex gap-8'>
        <div>
          <div className="mb-4">
            <label htmlFor="pickupDate" className='block mb-2'>Tanggal Sewa</label>
            <input
              type="date"
              id='pickupDate'
              value={pickupDate?.toISOString().split('T')[0]}
              onChange={e => setPickupDate(new Date(e.target.value))}
              className='p-1 border border-black text-sm'
              min={minPickupDate.toISOString().split('T')[0]}
            />
          </div>
          <div className='my-4'>
            <h4 className='mb-2'>Durasi Sewa</h4>
            <input
              type="number"
              id="hour"
              value={hour}
              onChange={e => setHour(Number(e.target.value))}
              className='p-1 border border-black text-sm'
              min={1}
              max={16}
            />
            <label htmlFor="hour" className='ml-2'>Jam</label>
          </div>
          <div className="mb-4">
            <label htmlFor="pickupTime" className='block mb-2'>Waktu Pickup</label>
            <input type="time" id="pickupTime" ref={timeInputRef} value={pickupTime} onChange={handleTimeChange} className='p-1 border border-black text-sm' />
          </div>
        </div>
        <div className='w-2/5'>
          <div className="mb-4">
            <label htmlFor="pickupLoc" className='block mb-2'>Lokasi Pickup</label>
            <input type="text" id="pickupLoc" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} className='p-1 border border-black text-sm w-full' />
          </div>
          <div className="mb-4">
            <label htmlFor="dropoffLoc" className='block mb-2'>Lokasi Dropoff</label>
            <input type="text" id="dropoffLoc" value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)} className='p-1 border border-black text-sm w-full' />
          </div>
          <div className="my-4">
            <h3>Total</h3>
            <p className="font-bold">{rupiah(car.hourRate * hour)}</p>
          </div>
        </div>
      </div>
      <div className="my-4">
          <button
            className='bg-black text-white px-4 py-2 font-bold'
            onClick={handleConfirmOrder}
          >Konfirmasi Sewa</button>
      </div>
    </>
  )
}

export default HourTabContent