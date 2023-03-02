import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthProvider'

export default function ProtectedLoginRoute( { children } ) {
  const { currentUser } = useAuth()
  if (currentUser) {
    return <Navigate to='/homepage' />
  }

  return children
}
