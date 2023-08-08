'use client'

import AdminHeader from "@/components/AdminHeader"
import AdminProtectedRoute from "@/components/AdminProtectedRoute"
import { createCar } from "@/features/car/carApi"
import { useState } from "react"
import { toast } from "react-hot-toast"


const Add = () => {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [fuel, setFuel] = useState('')
  const [rating, setRating] = useState(4,)
  const [image, setImage] = useState<File | null>(null)
  const [hourRate, setHourRate] = useState(10000)
  const [dayRate, setDayRate] = useState(10000)
  const [monthRate, setMonthRate] = useState(10000)
  
  function handleSubmit() {
    const isValid = name && type && fuel && rating && image && hourRate && dayRate && monthRate

    if (!isValid) {
      toast.error('Semua field harus diisi')
      return
    }

    const formData = new FormData()
    formData.append('name', name)
    formData.append('carType', type)
    formData.append('fuel', fuel)
    formData.append('rating', String(rating))
    formData.append('image', image)
    formData.append('hourRate', String(hourRate))
    formData.append('dayRate', String(dayRate))
    formData.append('monthRate', String(monthRate))

    createCar(formData)
      .then(res => {
        toast.success('Berhasil menambahkan mobil')
        console.log(res);
      })
      .catch(err => {
        toast.error(err.response.data.error)
      })
  }
  
  return (
    <AdminProtectedRoute>
      <AdminHeader />
      <div className="container py-8">
        <h2 className="font-bold text-xl">Tambah Data Mobil</h2>
        <div className="flex">
          <div className="w-1/3">
            <div className="my-4">
              <label htmlFor="name" className="block mb-2">Nama Mobil</label>
              <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} className="text-sm p-1 w-64 border rounded-lg" />
            </div>
            <div className="my-4">
              <label htmlFor="type" className="block mb-2">Tipe</label>
              <input type="text" name="type" id="type" value={type} onChange={e => setType(e.target.value)} className="text-sm p-1 w-64 border rounded-lg" />
            </div>
            <div className="my-4">
              <label htmlFor="fuel" className="block mb-2">Bahan bakar</label>
              <input type="text" name="fuel" id="fuel" value={fuel} onChange={e => setFuel(e.target.value)} className="text-sm p-1 w-64 border rounded-lg" />
            </div>
            <div className="my-4">
              <label htmlFor="rating" className="block mb-2">Rating</label>
              <input type="number" name="rating" id="rating" value={rating} onChange={e => setRating(Number(e.target.value))} className="text-sm p-1 w-64 border rounded-lg" />
            </div>
            <div className="my-4">
              <label htmlFor="image" className="block mb-2">Gambar</label>
              <input type="file" name="image" id="image" value={image} onChange={e => setImage(e.target.files && e.target.files[0])} className="text-sm p-1 w-64 border rounded-lg" />
            </div>
          </div>
          <div className="w-1/3">
            <div className="my-4">
              <label htmlFor="hourRate" className="block mb-2">Harga Per Jam</label>
              <input type="number" name="hourRate" id="hourRate" value={hourRate} onChange={e => setHourRate(Number(e.target.value))} className="text-sm p-1 w-64 border rounded-lg" />
            </div>
            <div className="my-4">
              <label htmlFor="dayRate" className="block mb-2">Harga Harian</label>
              <input type="number" name="dayRate" id="dayRate" value={dayRate} onChange={e => setDayRate(Number(e.target.value))} className="text-sm p-1 w-64 border rounded-lg" />
            </div>
            <div className="my-4">
              <label htmlFor="monthRate" className="block mb-2">Harga Bulanan</label>
              <input type="number" name="monthRate" id="monthRate" value={monthRate} onChange={e => setMonthRate(Number(e.target.value))} className="text-sm p-1 w-64 border rounded-lg" />
            </div>
            <button
              className="px-4 py-2 rounded-lg bg-teal-500 text-white font-bold text-sm"
              onClick={handleSubmit}
            >Tambah</button>
          </div>
        </div>
      </div>
    </AdminProtectedRoute>
  )
}

export default Add