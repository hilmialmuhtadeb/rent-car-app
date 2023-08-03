import Link from 'next/link'
import React from 'react'

const AdminHeader = () => {
  return (
    <nav>
      <div className='container mx-auto py-4'>
        <div className='flex justify-between'>
          <div className='flex'>
            <h1 className='text-xl font-bold'>Rent Car App</h1>
            <div className='ml-8'>
              <Link href='/admin/manage/car' className='text-sm mr-4'>Kelola Mobil</Link>
              <Link href='/admin/manage/order' className='text-sm mr-4'>Kelola Order</Link>
            </div>
          </div>
          <div className='flex items-center'>
            <p className='text-sm mr-4'>Admin</p>
            <button className='text-sm bg-teal-500 hover:bg-teal-600 text-white rounded-lg px-4 py-1'>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default AdminHeader