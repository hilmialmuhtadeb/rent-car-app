import { rupiah } from '@/features/utils'
import { Car } from '@/types/Car'
import React, { useEffect, useRef, useState } from 'react'

interface DailyTabContentProps {
  car: Car
}

const DailyTabContent: React.FC<DailyTabContentProps> = ({ car }) => {
  const timeInputRef = useRef<HTMLInputElement | null>(null);

  const [day, setDay] = useState(1)
  const [pickupDate, setPickupDate] = useState<Date | null>(null)
  const [dropoffDate, setDropOffDate] = useState<Date | null>(null)
  const [minPickupDate, setMinPickupDate] = useState<Date | null>(null)
  const [pickupTime, setPickupTime] = useState<string>('')

  const minDropoffDate = new Date()
  const maxDropoffDate = new Date(minDropoffDate.getTime() + 20 * 24 * 60 * 60 * 1000)

  const handleTimeChange = () => {
    if (timeInputRef.current) {
      const newValue = timeInputRef.current.value;
      setPickupTime(newValue);
    }
  };

  useEffect(() => {
    if (pickupDate && dropoffDate) {
      const diffTime = Math.abs(dropoffDate.getTime() - pickupDate.getTime())
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

      setDay(diffDays)
    }

    if (dropoffDate) {
      const minDate = new Date(dropoffDate.getTime() + 24 * 60 * 60 * 1000)
      setMinPickupDate(minDate)
    }
  }, [pickupDate, dropoffDate])
  
  return (
    <>
      <div className="flex gap-8">
        <div>
          <h4 className='mb-4'>Durasi Sewa</h4>
          <div className='flex gap-4'>
            <div>
              <label htmlFor="dropoff" className='block mb-2'>Mulai</label>
              <input
                type="date"
                id="dropoff"
                value={dropoffDate?.toISOString().split('T')[0]}
                onChange={e => setDropOffDate(new Date(e.target.value))}
                className='p-1 border border-black text-sm'
                min={minDropoffDate.toISOString().split('T')[0]}
                max={maxDropoffDate.toISOString().split('T')[0]}
              />
            </div>
            <div>
              <label htmlFor="pickup" className='block mb-2'>Hingga</label>
              <input
                type="date"
                id="pickup"
                value={pickupDate?.toISOString().split('T')[0]}
                onChange={e => setPickupDate(new Date(e.target.value))}
                className='p-1 border border-black text-sm'
                min={minPickupDate?.toISOString().split('T')[0]}
                disabled={!dropoffDate}
              />
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="pickupTime" className='block mb-2'>Waktu Pickup</label>
            <input type="time" id="pickupTime" ref={timeInputRef} value={pickupTime} onChange={handleTimeChange} className='p-1 border border-black text-sm' />
          </div>
        </div>
        <div className='w-2/5'>
        <div className="mb-4">
            <label htmlFor="pickupLoc" className='block mb-2'>Lokasi Pickup</label>
            <input type="text" id="pickupLoc" className='p-1 border border-black text-sm w-full' />
          </div>
          <div className="mb-4">
            <label htmlFor="dropoffLoc" className='block mb-2'>Lokasi Dropoff</label>
            <input type="text" id="dropoffLoc" className='p-1 border border-black text-sm w-full' />
          </div>
          <div className="my-4">
            <h3>Total</h3>
            <p className="font-bold">{rupiah(car.dayRate * day)}</p>
          </div>
        </div>
      </div>
      <div className="my-4">
        <button className='bg-black text-white px-4 py-2 font-bold'>Konfirmasi Sewa</button>
      </div>
    </>
  )
}

export default DailyTabContent