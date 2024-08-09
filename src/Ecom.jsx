import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Headercomp from './Header/Headercomp'
import AuthCheck from './Auth/AuthCheck.jsx'
const Ecom = () => {
 
  const navigate  = useNavigate()
 

  return (
    <div>
      <AuthCheck>
        <Headercomp/>
      <Outlet/>
      </AuthCheck>
    </div>
  )
}

export default Ecom
