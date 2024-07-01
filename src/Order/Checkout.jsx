import React, { useEffect } from 'react'
import PersonInfo from './PersonInfo.jsx'
import Cart from '../Cart/Cart.jsx'
import Cookies from "js-cookie"
import { GetPersonInfo } from '../../Hooks/UseGetPersonInfo.js';
import { useDispatch } from 'react-redux';
import {addaddress,addpaymentMethod} from "../../Store/OrderSlice.js"
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
  const dispatch = useDispatch()
  const token =  Cookies.get('token')
  const user = Cookies.get('user')
const navigate = useNavigate()
 

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

  const getPerson =   GetPersonInfo(token,user)
  console.log("datat for map",getPerson?.Address?.dataproduct?.sucess);



  return (
    <div  className='flex flex-col lg:flex-row w-full'>
      <div>
      <PersonInfo/>
      <div className='ml-11 mt-10'>
         {getPerson.Address?.dataproduct?.sucess && 
         <div>
          <h1>Addresses</h1>
          <p>Choose from Existing addresses</p>
             {         getPerson?.Address?.dataproduct?.data.map((data)=>
            <div  className='flex gap-7 mt-2 ' key={data._id}>
                  <input  onClick={()=>dispatch(addaddress(data._id))}   type="radio" name='Address'   />
                  <div>
                    <h1>{data.fullName}</h1>
                    <p>{data.street}</p>
                     <p>{data.postalcode}</p>
                  </div>
                  <div>
                    <h2>Phone {data.phone}</h2>
                     <p>{data.city}</p>
                  </div>
            </div>
            )
          }
            </div>

         }
         </div>
         {/* payment Method */}
         <div className='ml-11 mt-10'>
          <h1>Payment Methods</h1>
          <p>Choose One</p>
           <div>
            <span className='flex mt-3'>           
               <input onClick={(e)=> dispatch(addpaymentMethod(e.target.value))} type="radio" value="Cash" name="payment"/>
            <p>Cash</p>
            </span>
            <span className='flex mt-2'>           
               <input onClick={(e)=> dispatch(addpaymentMethod(e.target.value))}  value="Card Payment" type="radio" name="payment"/>
            <p>Card Payment</p>
            </span>
           </div>
         </div>
      </div>
      <Cart btn='Order Now'/>
    </div>
  )
}

export default Checkout
