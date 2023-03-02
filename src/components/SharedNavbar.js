import React from 'react'
import { Outlet } from 'react-router-dom'

export default function SharedNavbar() {
  return (
    <>
      <h1 className='position-sticky top-0'>Welcome Bhanu</h1>
      <Outlet />
    </>
  )
}
