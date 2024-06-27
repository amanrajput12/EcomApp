import React, { useRef } from 'react'
import Cookies from "js-cookie"
import { UserInfo } from '../../Hooks/UsePersonInfo.js'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const PersonInfo = () => {
  const token =  Cookies.get('token')
  const user = Cookies.get('user')
  console.log("on info page",token,user);
  const fullName = useRef(null)
  const email = useRef(null)
  const phone = useRef(null)
  const street = useRef(null)
  const city = useRef(null)
  const state = useRef(null)
  const postalcode = useRef(null)

 
   let data
  
  
 
  return (
    <div className='flex flex-col w-1/2 bg-white ml-10 mr-10'>
      <h2>Personal Information</h2>
      <p>Use a permanent address where you can receive mail.</p>
      <label htmlFor="Full name">Full name</label>
      <input ref={fullName} className='border border-black rounded-md' type="text" name="" id="" />
      <label htmlFor="Email address">Email address</label>
      <input ref={email} className='border border-black rounded-md' type="email" />
      <label  htmlFor="Phone">Phone</label>
      <input ref={phone}  className='border border-black rounded-md' type="tel" name="" id="" />
      <label htmlFor="Street address">Street address</label>
      <input ref={street} className='border border-black rounded-md' type="text" name="" id="" />

      <div className='flex flex-col lg:flex-row  '>
       <div className='flex flex-col' >
        <label htmlFor="City">City</label>
        <input ref={city} className='border border-black rounded-md' type="text" name="" id="" />
       </div>
       <div className='flex flex-col' >
        <label htmlFor="State / Province">State / Province</label>
        <input ref={state} className='border border-black rounded-md' type="text" name="" id="" />
       </div>
       <div className='flex flex-col' >
        <label htmlFor="ZIP / Postal code">ZIP / Postal code</label>
        <input ref={postalcode} className='border border-black rounded-md' type="text" name="" id="" />
       </div>
      </div>
      <div className='flex justify-end mr-10 '> 
        <button onClick={()=>{
           fullName.current.value ="";
           email.current.value="";
           phone.current.value="";
           street.current.value="";
           city.current.value="";
           state.current.value="";
           postalcode.current.value="";
        }} className='p-2 mr-4'>Reset</button>
        <button  onClick={async()=>{data = await UserInfo(fullName.current.value,email.current.value,phone.current.value,street.current.value,city.current.value,state.current.value,postalcode.current.value,token,user);
          console.log("data", data.dataproduct.sucess);
          if(data.dataproduct.sucess){
            toast("Sucessfully Added Address");
            fullName.current.value ="";
            email.current.value="";
            phone.current.value="";
            street.current.value="";
            city.current.value="";
            state.current.value="";
            postalcode.current.value="";
          }
        } } className='p-2 bg-blue-900 rounded-lg text-white'>Add Address</button>
      <ToastContainer />
      </div>
    </div>
  )
}

export default PersonInfo
