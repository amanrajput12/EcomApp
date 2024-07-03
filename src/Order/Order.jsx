import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from "js-cookie"
import GetOrder from '../../Hooks/UseGetOrder.js'
import { orders } from '../../Store/OrderSlice.js'
import { useNavigate } from 'react-router-dom'

const Order = () => {
  const data = useSelector((store) => store.Order)
  const dispatch = useDispatch()
  console.log("data on order", data);
      
  const token = Cookies.get("token")
  const user = Cookies.get("user")
  const navigate = useNavigate()
useEffect(()=>{

  GetOrder(token,user,dispatch,orders)

  console.log("Component mounted");
  let interval = setInterval(() => {
    const token = Cookies.get('token')
    const user  = Cookies.get('user')
    console.log("set interval",token,user);
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
      My order
      {
        data?.orders?.order?.map((orderData) => {
          console.log("data on map", orderData);

            // Extracting quantities from orderquantity
            const quantities = orderData?.orderquantity?.map(item => item?.quantity);
            console.log("quantities", quantities);
          return (
            <div className='border border-slate-950 m-4 p-1 rounded-md' key={orderData._id}>
              <h1 className='font-bold ml-4 text-2xl'>TotalBill ₹ {orderData?.BillAmount}</h1>
              <h2 className=' ml-4 '>BillStatus <span className='font-thin'> {orderData?.BillStatus}
               
              <p> Order Time {new Date(orderData?.createdAt).toLocaleString()} </p>
              <p>Delivery Address <span className='font-semibold'>{orderData?.address?.street+ " "+orderData?.address?.city +" "+ orderData?.address?.state}</span></p>
              <p> PostalCode {orderData?.address?.postalcode}</p>

              </span>
              </h2>

              {
                orderData?.products?.map((order,i) => (
                  <div className='flex flex-col  items-center lg:flex-row lg:justify-around   mt-10' key={order._id}>
                    <div className='w-1/2'>
                      <h2>{order?.title}</h2>
                      <p ><span className='font-bold line-through'> ₹ {order?.price} </span>{order?.discountPercentage} % off</p>
                           <p>₹ {Math.round(order?.price-(order?.discountPercentage*order?.price)/100)}</p>
                           <p className='font-bold'>Quantity {quantities[i]}</p>
                    </div>
                    <div className='w-1/4 mt-2'>
                      <img className='w-[160px] h-[200px]' src={order?.productImg[0]} alt="Product" />
                    </div>
                  </div>
                ))
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Order
