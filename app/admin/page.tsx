import AdminHeader from '@/components/AdminHeader'
import AdminProtectedRoute from '@/components/AdminProtectedRoute'
import React from 'react'

const AdminDashboard = () => {
  return (
    <AdminProtectedRoute>
      <AdminHeader />
      <div className="container py-8">
        <h1>Selamat Datang, Administrator!</h1>
      </div>
    </AdminProtectedRoute>
  )
}

export default AdminDashboard