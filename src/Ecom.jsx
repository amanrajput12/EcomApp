import React from 'react'
import { Outlet } from 'react-router-dom'
import Headercomp from './Header/Headercomp'
const Ecom = () => {
  return (
    <div>
        <Headercomp/>
      <Outlet/>
    </div>
  )
}

export default Ecom
