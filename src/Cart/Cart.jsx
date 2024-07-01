import React, { memo, useEffect, useState } from 'react'
import Cookies from "js-cookie"
import GetCartData from '../../Hooks/UseGetCartData.js'
import fetchData from '../Utils/fetch.js'
import RemoveCartData from '../../Hooks/UseRemoveCartData.js'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { addProduct } from '../../Store/CartSlice.js'
import ChangeCart from '../../Hooks/UseChangeCart.js'
import Payment from '../../Hooks/UsePayment.js'

const Cart = ({btn="Checkout"}) => {
 
  

 const [cartBalance,setCartBalance] = useState({})

  const token = Cookies.get("token")
  const user = Cookies.get("user")
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const orderdata = useSelector((store)=>store.Order)
  const cart = useSelector((store)=>store.Cart)
       console.log("redux ",cart.Products);
  console.log("cookies data are",token,user);
   

useEffect(()=>{
 getcard()
     
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

async function getcard(){
    GetCartData(token,user,dispatch,addProduct)
  console.log("cardata",cart.Products);
  setCartBalance({
    totalAmount:cart.totalAmount,
   totalquantity:cart.totalQuantity
  })
}
console.log("cart used ",cartBalance);
    const handlecart = async()=>{
      console.log("cart click",btn);
      if(btn=="Checkout"){
        navigate('/checkout')
      }
  if((btn="Order Now")){
    Payment(orderdata,cart,cartBalance,user,token,toast,dispatch,navigate)
     }
    
      
    
  }
    
    
   
 
    
  
  return (
    <div className='flex flex-col  '>
    <h1 className='text-2xl font-bold mb-2'>Cart</h1>
    
       { cart.Products && 
        cart?.Products?.map((data,i)=>
        <div className=' flex justify-around p-3' key={data.product._id}>
          <div className='w-1/2'>
          <h2 className=''>{data.product.title}</h2>
       
           <p ><span className='font-bold line-through'> ₹ {data.product.price} </span>{data.product.discountPercentage} % off</p>
           <p>₹ {Math.round(data.product.price-(data.product.discountPercentage*data.product.price)/100)}</p>
                     <div className="text-gray-500  p-3 flex items-center mt-11">
                          <label
                            htmlFor="quantity"
                            className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                          >
                            Qty
                          </label>
                          <select className='w-14'
                            onChange={(e) =>  ChangeCart(token,data.product._id,user,e.target.value,toast,dispatch,addProduct) }
                            value={data.quantity}
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
          <button onClick={()=>{ 
          
             RemoveCartData(token,user,data.product._id,toast,dispatch,addProduct)
            
          }
          } className='p-2 bg-zinc-700 rounded-xl text-white ml-10'>Remove</button>
                        </div>
          </div>
          <div className='w-1/4'>
          <img className=' w-[120px] h-[200px]' src={data.product.productImg[0]} alt="" />
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
          <h1 className='font-bold text-2xl'>₹  {cart.totalAmount}</h1>
       
          <h1 className='font-bold text-2xl'>{cart.totalQuantity} items</h1>
        </span>
       </div>
       <button onClick={()=>handlecart()} type='submit' className=' p-2 m-6  rounded-md text-white font-semibold w-[90%] bg-blue-900'>{btn}</button>
       <ToastContainer />
       <p onClick={()=>navigate('/ecom/home')} className='p-2 m-3 w-[40vw] self-center cursor-pointer text-center '>or <span className='text-blue-800 font-semibold '>Continue Shooping</span></p>
    </div>
  )
}

export default Cart
