'use client'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { RootState } from '@/app/store'
import Navbar from '@/components/Navbar'
import CarInfo from '@/components/CarInfo'
import { getCarById } from '@/features/car/carApi'
import { Car } from '@/types/Car'
import OrderTabs from '@/components/OrderTabs'

interface CarDetailProps {
  params: {
    id: number
  }
}

const CarDetail: React.FC<CarDetailProps> = ({ params }) => {
  const id = Number(params.id)

  const cars = useSelector((state: RootState) => state.car.cars)
  const selectedCar = useSelector((state: RootState) => state.car.selectedCar)

  const [isFetching, setIsFetching] = useState(true)
  const [car, setCar] = useState<Car | undefined>(cars.filter(car => car.id === id)[0])
  const [isOrderFormVisible, setIsOrderFormVisible] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    if (car === undefined && isFetching) {
      getCarById(id)
        .then(res => {
          dispatch({ type: 'car/setSelectedCar', payload: res })
          setIsFetching(false)
        })
        .catch(err => {
          setIsFetching(false)
        })
    }

    if (car !== undefined && isFetching) {
      setIsFetching(false)
    }
  }, [])

  useEffect(() => {
    if (selectedCar !== undefined) {
      setCar(selectedCar)
    }
  }, [selectedCar])

  function showCarInfo() {
    if (car !== undefined) {
      return (
        <>
          <div className="py-8">
            <CarInfo car={car} setIsOrderFormVisible={setIsOrderFormVisible} />
          </div>
          <div className={"container " + (isOrderFormVisible ? 'block' : 'hidden') }>
            <OrderTabs car={car} />
          </div>
        </>
      )
    }

    return (
      <div className="col-span-4 flex justify-center py-16">
        <p className="text-center">Mobil tidak ditemukan. <Link href='/car' className='underline'>Lihat Mobil lain</Link></p>
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      {
        isFetching ? (
          <div className="col-span-4 flex justify-center py-16">
            <p className="text-center">Loading...</p>
          </div>
        ) : (
          showCarInfo()
        )
      }
    </div>
  )
}

export default CarDetail