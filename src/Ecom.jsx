import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Cookies from "js-cookie"
import Headercomp from './Header/Headercomp'
const Ecom = () => {
 
  const navigate  = useNavigate()
  useEffect(()=>{
    console.log("Component mounted");
    let interval = setInterval(() => {
      const token = Cookies.get('token')
      const user  = Cookies.get('user')
    
      if(!(token,user)){
         navigate('/')
      }
    }, 2000);

    return () => {
      console.log("Clearing interval");
      clearInterval(interval);
    }
  },[])

  return (
    <div>
        <Headercomp/>
      <Outlet/>
    </div>
  )
}

export default Ecom
