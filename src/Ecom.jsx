import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Headercomp from './Header/Headercomp'
const Ecom = () => {
  useEffect(()=>{
    
  })
  return (
    <div>
        <Headercomp/>
      <Outlet/>
    </div>
  )
}

export default Ecom
