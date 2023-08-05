"use client"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { Car } from "@/types/Car"
import { getAllCars } from "@/features/car/carApi"
import Navbar from "@/components/Navbar"
import CarCard from "@/components/CarCard"

const Car = () => {
  const [isFetching, setIsFetching] = useState(true)
  
  const dispatch = useDispatch()
  const cars = useSelector((state: RootState) => state.car.cars)
  
  useEffect(() => {
    if (cars.length === 0 && isFetching) {
      getAllCars()
        .then(res => {
          dispatch({ type: 'car/setCars', payload: res })
          setIsFetching(false)
        })
        .catch(err => {
          setIsFetching(false)
        })
    }
  })
  
  return (
    <div>
      <Navbar />
      <div className="container px-32 mx-auto py-8 grid grid-cols-4 gap-4">
        {cars.map((car: Car, index: number) => (
          <CarCard key={index} {...car} />
        ))}
        { !isFetching && cars.length === 0 && (
          <div className="col-span-4 flex justify-center">
            <p className="text-center">Belum ada mobil untuk disewakan.</p>
          </div>
        )}
        {isFetching && (
          <div className="col-span-4 flex justify-center">
            <p className="text-center">Loading...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Car