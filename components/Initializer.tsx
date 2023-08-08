import { RootState } from '@/app/store'
import { getUserProfile } from '@/features/user/userApi'
import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

const Initializer = () => {
  const dispatch = useDispatch()
  const profile = useSelector((state: RootState) => state.user.profile)
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    const adminToken = localStorage.getItem('adminToken')
    
    if (token) {
      dispatch({ type: 'auth/login' })
    }

    if (adminToken) {
      dispatch({ type: 'auth/login' })
      dispatch({ type: 'auth/setAdmin', payload: true })
    }
    
    if (token && profile.username === '') {
      getUserProfile()
        .then(res => {
          const payload = {
            id: res.data.user.id,
            username: res.data.user.username,
            email: res.data.user.email,
            phoneNumber: res.data.user.phoneNumber,
            city: res.data.user.city,
            zip: res.data.user.zip,
            address: res.data.user.address,
          }
          dispatch({ type: 'user/setProfile', payload })
        })
        .catch(() => {
          toast.error('Failed to get user profile')
        })
    }
  })
  
  return (
    <></>
  )
}

export default Initializer