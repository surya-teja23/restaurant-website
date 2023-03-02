import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthProvider'

export default function ProtectedMainRoute( { children } ) {
  const { currentUser } = useAuth()
  if (!currentUser) {
    return <Navigate to='/login' />
  }

  return children
}
