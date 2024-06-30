import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from "js-cookie"
import GetOrder from '../../Hooks/UseGetOrder.js'
import { orders } from '../../Store/OrderSlice.js'

const Order = () => {
  const data = useSelector((store) => store.Order)
  const dispatch = useDispatch()
  console.log("data on order", data);
      
  const token = Cookies.get("token")
  const user = Cookies.get("user")
useEffect(()=>{

  GetOrder(token,user,dispatch,orders)
},[])


  return (
    <div>
      My order
      {
        data?.orders?.order?.map((orderData) => {
          console.log("data on map", orderData);

            // Extracting quantities from orderquantity
            const quantities = orderData.orderquantity.map(item => item.quantity);
            console.log("quantities", quantities);
          return (
            <div className='border border-slate-950 m-4 p-1 rounded-md' key={orderData._id}>
              <h1 className='font-bold ml-4 text-2xl'>TotalBill ₹ {orderData.BillAmount}</h1>
              {
                orderData?.products?.map((order,i) => (
                  <div className='flex w-screen justify-around mt-10' key={order._id}>
                    <div className='w-1/2'>
                      <h2>{order.title}</h2>
                      <p>₹ {order.price}</p>
                           <p>{quantities[i]}</p>
                    </div>
                    <div className='w-1/4'>
                      <img className='w-[120px] h-[200px]' src={order.productImg[0]} alt="Product" />
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
