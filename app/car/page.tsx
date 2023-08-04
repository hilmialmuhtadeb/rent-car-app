"use client"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { Car } from "@/types/Car"
import { getAllCars } from "@/features/car/carApi"
import Navbar from "@/components/Navbar"
import CarCard from "@/components/CarCard"

const Car = () => {
  const dispatch = useDispatch()
  const cars = useSelector((state: RootState) => state.car.cars)
  
  useEffect(() => {
    if (cars.length === 0) {
      getAllCars()
        .then(res => dispatch({ type: 'car/setCars', payload: res }))
    }
  }, [cars])
  
  return (
    <div>
      <Navbar />
      <div className="container px-32 mx-auto py-8 grid grid-cols-4 gap-4">
        {cars.map((car: Car, index: number) => (
          <CarCard key={index} {...car} />
        ))}
      </div>
    </div>
  )
}

export default Car