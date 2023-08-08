import { rupiah } from '@/features/utils'
import { Car } from '@/types/Car'
import React, { useState } from 'react'

interface MonthTabContentProps {
  car: Car
}

const MonthlyTabContent: React.FC<MonthTabContentProps> = ({ car }) => {
  const [month, setMonth] = useState(1)
  const [pickupDate, setPickupDate] = useState<Date | null>(null)

  const minPickupDate = new Date()
  
  return (
    <>
      <h4 className='mb-4'>Durasi Sewa</h4>
      <div className="my-4">
        <input
          type="number"
          id="month"
          value={month}
          onChange={e => setMonth(Number(e.target.value))}
          className='p-1 border border-black text-sm'
          min={1}
          max={16}
        />
        <label htmlFor="month" className='ml-2'>Bulan</label>
      </div>
      <div className="my-4">
        <label htmlFor="pickupDate" className='block mb-2'>Tanggal Mulai Sewa</label>
        <input
          type="date"
          id='pickupDate'
          value={pickupDate?.toISOString().split('T')[0]}
          className='p-1 border border-black text-sm'
          min={minPickupDate.toISOString().split('T')[0]}
        />
      </div>
      <div className="my-4">
        <h3>Total</h3>
        <p className="font-bold">{rupiah(car.monthRate * month)}</p>
      </div>
      <div className="my-4">
        <button className='bg-black text-white px-4 py-2 font-bold'>Konfirmasi Sewa</button>
      </div>
    </>
  )
}

export default MonthlyTabContent