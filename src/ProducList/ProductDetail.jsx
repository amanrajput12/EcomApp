import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from '../Utils/fetch'
import Cookies from "js-cookie"
import { useDispatch } from 'react-redux'
import { addProduct } from '../../Store/CartSlice.js'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetail = () => {
    const {params} = useParams()
    const [productDetail,setProductDetail]= useState(null)
    const [imageCount,setImageCount]= useState(0)
    const token = Cookies.get('token');
    const user = Cookies.get('user');
   
   
    const dispatch = useDispatch()
         useEffect(()=>{
          
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                     'token':token
                },
                body: JSON.stringify({
                    id: params
                }),
    credentials: 'include'
            };
             fetchData(`https://mern-ecomapp-1.onrender.com/v1/product/getProductDetail`,options).then((data)=>
                setProductDetail(data.dataproduct.data))
         },[])

         const handlecart = ()=>{
          console.log("on click the cart");
       dispatch(addProduct({
        productImg:productDetail[0].productImg[0],
        price:productDetail[0]?.price,
          id:productDetail[0]?._id
       }))


       const options = {
        method:"POST",
        headers:{
          'Content-Type':'application/json',
          'token':token
        },
      body:JSON.stringify({
        product:params,
        quantity:Number(1),
        user:user

      }),
    credentials: 'include'
       }
       
       fetchData("https://mern-ecomapp-1.onrender.com/v1/proudctdetail/cart",options).then((data)=>{
        if (data.dataproduct.message === "Proudct is already in the cart"){
            toast("Proudct is already in the car")
        }
        
        else if(data.dataproduct.message === "product added in the cart"){
          toast("product added in the cart")
        }
        console.log("on added to cart",data.dataproduct.message)
         })
         }
    // console.log("in parmas",params,productDetail[0]);
  return (
    <div>
     

      <div className='grid  grid-cols-10 gap-3 ' >
        <div className='hidden lg:col-span-3 ml-11 border lg:flex flex-col items-center border-black  '>
     
          { productDetail && productDetail[0].productImg.map((img,i)=><div className='hover:cursor-pointer mt-4' onClick={()=>setImageCount(i)} key={i}><img className='w-16 h-24  content-center' src={img} alt="img" /></div>)}
        </div>
        <div className='col-span-10 lg:col-span-7    '>
      
           { productDetail &&
           <div>
        <div className='flex-col flex lg:flex-row items-center lg:justify-around'>
          <div className='flex items-center'>
          <FaArrowLeft  onClick={()=>{
                 console.log("on right",productDetail[0].productImg.length,imageCount);
                 if(imageCount==0){
                  setImageCount(productDetail[0].productImg.length-1)
                 }
                 else{
                  setImageCount(imageCount-1)
                 }
           }} className='lg:hidden' />
           <img className='h-[50vh] w-[60vw] lg:w-[300px]  p-10 rounded-2xl ' src={productDetail[0].productImg[imageCount]} alt="productimg"  />
           <FaArrowRight onClick={()=>{
                 console.log("on right",productDetail[0].productImg.length,imageCount);
                 if(imageCount<productDetail[0].productImg.length-1){
                  setImageCount(imageCount+1)
                 }
                 else{
                  setImageCount(0)
                 }
           }} className='lg:hidden' />
           </div>
              <h2 className='lg:mt-28 max-w-60'>{productDetail[0]?.description}</h2>
           </div>
            <div className='flex items-center justify-evenly'>
              <p className=''>{productDetail[0]?.price}</p>
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
