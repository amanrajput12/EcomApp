import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Cookies from "js-cookie"

import { FaArrowLeft,FaArrowRight } from "react-icons/fa"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GetProductDetail from '../../Hooks/UseGetProductDetail.js'
import AddtoCart from '../../Hooks/UseAddtoCart.js'
import Loading from '../Utils/Loading.jsx';
import { useDispatch, useSelector } from 'react-redux';


const ProductDetail = () => {
    const {params} = useParams()
    // const [productDetail,setProductDetail]= useState(null)
  
    const [imageCount,setImageCount]= useState(0)
    const token = Cookies.get('token');
    const user = Cookies.get('user');
    console.log("parmas",params);
    
    const dispatch = useDispatch()
   const navigate = useNavigate()
   const productDetail = useSelector((store)=>store.ProductDetail)
         useEffect(()=>{
            dispatch(GetProductDetail({token,params}))
                 },[])
 
         
         const handlecart = ()=>{
         AddtoCart(token,params,user,toast)
         }
    
  return (
    <div>
        <div className='grid  grid-cols-10 gap-3 ' >
   
        <div className='hidden lg:col-span-3 ml-11 border lg:flex flex-col items-center   '>
         
        { productDetail.Loading && <Loading/>}
          { productDetail && productDetail.ProductImage.map((img,i)=><div className='hover:cursor-pointer mt-4' onClick={()=>setImageCount(i)} key={i}><img className='w-16 h-24  content-center' src={img} alt="img" /></div>)}
        </div>
        <div className='col-span-10 lg:col-span-7    '>
       
        { !productDetail && <Loading/>}
           { productDetail &&
           <div>
        <div className='flex-col flex lg:flex-row items-center lg:justify-around'>
          <div className='flex items-center'>
          <FaArrowLeft  onClick={()=>{
                 console.log("on right",productDetail.productImage.length,imageCount);
                 if(imageCount==0){
                  setImageCount(productDetail.ProductImage.length-1)
                 }
                 else{
                  setImageCount(imageCount-1)
                 }
           }} className='lg:hidden' />
           <img className='h-[50vh] w-[60vw] lg:w-[300px]  p-10 rounded-2xl ' src={productDetail.ProductImage[imageCount]} alt="productimg"  />
           <FaArrowRight onClick={()=>{
                 console.log("on right",productDetail.ProductImage.length,imageCount);
                 if(imageCount<productDetail.ProductImage.length-1){
                  setImageCount(imageCount+1)
                 }
                 else{
                  setImageCount(0)
                 }
           }} className='lg:hidden' />
           </div>
              <h2 className='lg:mt-28 max-w-60'>{productDetail?.Description}</h2>
           </div>
            <div className='flex items-center justify-evenly'>
               <div>
                <p ><span className='font-bold line-through'> ₹ {productDetail?.price} </span>{productDetail?.discoutPercentage} % off</p>
           <p className='ml-2'>₹ {Math.round(productDetail?.price-(productDetail?.discoutPercentage*productDetail?.price)/100)}</p>
           </div>
              <div>
                <button onClick={handlecart} className='bg-orange-600  p-2 lg:p-4 rounded-xl text-white font-bold '>ADD TO CART</button>
               
              </div>
            </div>
           </div>
}
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default ProductDetail
