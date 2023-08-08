import Navbar from '@/components/Navbar'
import React from 'react'

const ThankPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Terima kasih</h1>
          <p className="text-gray-500">Telah mempercayakan kebutuhan sewa kendaraan Anda kepada Kami. Silahkan cek email anda untuk melihat detail pemesanan.</p>
        </div>
      </div>
    </>
  )
}

export default ThankPage