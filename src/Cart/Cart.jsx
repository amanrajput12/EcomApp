import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie"
import GetCartData from '../../Hooks/UseGetCartData.js'
import fetchData from '../Utils/fetch.js'
import RemoveCartData from '../../Hooks/UseRemoveCartData.js'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateOrder from '../../Hooks/UseCreateOrder.js'

const Cart = ({btn="Checkout"}) => {
 
  
  const token = Cookies.get("token")
  const user = Cookies.get("user")
    const navigate = useNavigate()
  const orderdata = useSelector((store)=>store.Order)

  console.log("cookies data are",token,user);
  const cartdata = GetCartData(token,user)
  console.log("usercart data",cartdata?.cartData?.Amount);
    
  
    const handlecart =()=>{
      console.log("cart click",btn);
      if(btn=="Checkout"){
        navigate('/checkout')
      }
  if((btn="Order Now")){
    if(!(orderdata.address,orderdata.paymentMethod)){
      toast("Select Address and PaymentMethod");
    return null
    }
      console.log("order is able");
   const productId= cartdata?.cartData?.data.map((data)=>data.product._id )
     const quantity = cartdata?.cartData?.data.map((data)=>({
      product:data.product._id,
      quantity:data.quantity
     }))
   
    console.log("Product IDs:", quantity);
   
  
        CreateOrder(token,user,productId,quantity,orderdata.address,orderdata.paymentMethod)
  }
    
    }
    const handlecartquantity = async(quantity,id)=>{
      console.log(quantity,id)
       try {
             const option = {
               method:"POST",
                headers:{
                  'Content-Type': 'application/json',
                  'token':token
                },
                body: JSON.stringify({
                  quantity:Number(quantity),
                  product:id
                })
             }

          await    fetchData("/v1/proudctdetail/cartquantity",option).then((data)=>console.log("data on update quantity",data))
       } catch (error) {
        
       }
    }

  
  return (
    <div className='flex flex-col  '>
      Cart
       {
        cartdata?.cartData?.data.map((data,i)=>
        <div className=' flex justify-around p-3' key={data.product._id}>
          <div className='w-1/2'>
          <h2 className=''>{data.product.title}</h2>
           <h2>₹ {data.product.price}</h2>
                     <div className="text-gray-500  p-3 flex items-center mt-11">
                          <label
                            htmlFor="quantity"
                            className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                          >
                            Qty
                          </label>
                          <select className='w-14'
                            onChange={(e) =>handlecartquantity(e.target.value,data.product._id) }
                            value={data.quantity}
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
          <button onClick={()=>RemoveCartData(token,user,data.product._id)} className='p-2 bg-zinc-700 rounded-xl text-white ml-10'>Remove</button>
                        </div>
          </div>
          <div className='w-1/4'>
          <img className='w= w-[120px] h-[200px]' src={data.product.productImg[0]} alt="" />
          </div>
        </div>
        )
       }
       <div className='flex justify-around items-center'>
        <span>
          <h1 className='font-bold text-2xl'>Subtotal</h1> 
          <h1 className='font-bold text-2xl'>Total Items in Cart</h1> 
       
        </span>
        <span>
          <h1 className='font-bold text-2xl'>₹  {cartdata?.cartData?.Amount}</h1>
          <h1 className='font-bold text-2xl'>{cartdata?.cartData?.data.length} items</h1>
        </span>
       </div>
       <button onClick={()=>handlecart()} type='submit' className=' p-2 m-6  rounded-md text-white font-semibold w-[90%] bg-blue-900'>{btn}</button>
       <ToastContainer />
       <p onClick={()=>navigate('/ecom/home')} className='p-2 m-3 w-[40vw] self-center cursor-pointer text-center '>or <span className='text-blue-800 font-semibold '>Continue Shooping</span></p>
    </div>
  )
}

export default Cart
