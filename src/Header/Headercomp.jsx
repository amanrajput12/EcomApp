import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import Cookies from "js-cookie"
import { LuBoxSelect } from "react-icons/lu";
const Headercomp = () => {
    const navigate = useNavigate()
    const [btntoogle,setBtnToogle] = useState(false)
  return (
    <div>
     
      <div className='flex  justify-between pl-4 pr-4 items-center'>
        <button  onClick={()=>navigate('/Ecom/home')} className='p-2 bg-teal-700 mt-5 rounded-lg text-white font-semibold shadow-2xl hover:bg-teal-500'>Products</button>
        <div className='flex justify-end items-center'>
        <FaCartShopping  onClick={()=>navigate('/cart')}  className='w-[100px] h-[30px] hover:cursor-pointer mt-5 ' />
          <div>
        <LuBoxSelect onClick={()=>setBtnToogle(!btntoogle)}  className='w-[100px] h-[30px] hover:cursor-pointer mt-5 ' />
        {btntoogle &&
         <div className=' flex flex-col mt-1 p-2 rounded-lg   bg-slate-200  w-24 justify-end absolute '>
        <button onClick={()=>navigate('/orderconfirm')} className='p-2 rounded-md m-1 hover:bg-white' >Order</button>
        <button onClick={()=> {
    Cookies.remove('token');
    Cookies.remove('user');
    navigate('/')
  }} className='p-2 rounded-md m-1 hover:bg-white' >Signout</button>
      </div>
      }
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Headercomp
