'use client'

import React from 'react'
import Link from 'next/link'
import AdminHeader from '@/components/AdminHeader'
import AdminProtectedRoute from '@/components/AdminProtectedRoute'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getAllCars } from "@/features/car/carApi"
import { RootState } from '@/app/store'
import { rupiah } from '@/features/utils'

const ManageCar = () => {
  const [isFetching, setIsFetching] = useState(true)
  
  const cars = useSelector((state: RootState) => state.car.cars)

  const dispatch = useDispatch()
  
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

    if (cars.length > 0 && isFetching) {
      setIsFetching(false)
    }
  }, [cars, dispatch, isFetching])

  return (
    <AdminProtectedRoute>
      <AdminHeader />
      <div className='container mx-auto py-8'>
        <div className='flex justify-between mb-8'>
          <h1 className='text-xl font-bold'>Kelola Mobil</h1>
          <Link href='/admin/manage/car/add'>
            <button className='text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-1'>Tambah Mobil</button>
          </Link>
        </div>
        <main>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Nama Mobil
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Tipe
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Harga Harian
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Aksi
                      </th>
                  </tr>
              </thead>
              <tbody>
                {
                  cars.map((car, index: number) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            { car.name }
                        </th>
                        <td className="px-6 py-4">
                            {car.type}
                        </td>
                        <td className="px-6 py-4">
                            {rupiah(car.dayRate)}
                        </td>
                        <td className="px-6 py-4 flex gap-4">
                          <button>Edit</button>
                          <button>Hapus</button>
                        </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          { !isFetching && cars.length === 0 && (
            <div className="col-span-4 flex justify-center">
              <p className="text-center">Belum ada mobil. <Link href="/admin/manage/car/add" className='underline'>Klik untuk tambah</Link></p>
            </div>
          )}
          {isFetching && (
            <div className="col-span-4 flex justify-center">
              <p className="text-center">Loading...</p>
            </div>
          )}
        </main>
      </div>
    </AdminProtectedRoute>
  )
}

export default ManageCar