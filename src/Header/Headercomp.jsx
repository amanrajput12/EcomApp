import React from 'react'
import { useNavigate } from 'react-router-dom'

const Headercomp = () => {
    const navigate = useNavigate()
  return (
    <div>
     
      <div className='flex  justify-around'>
        <button  onClick={()=>navigate('/Ecom/home')} className='p-2 bg-teal-700 mt-5 rounded-lg text-white font-semibold shadow-2xl hover:bg-teal-500'>Home</button>
        <button onClick={()=>navigate('/cart')}  className='p-2 bg-teal-700 mt-5 rounded-lg text-white font-semibold shadow-2xl hover:bg-teal-500'>Cart</button>
        <button className='p-2 bg-teal-700 mt-5 rounded-lg text-white font-semibold shadow-2xl hover:bg-teal-500'>User</button>
      </div>
    </div>
  )
}

export default Headercomp
