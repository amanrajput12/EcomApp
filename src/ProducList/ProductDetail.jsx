import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from '../Utils/fetch'
import Cookies from "js-cookie"
import { useDispatch } from 'react-redux'
import { addProduct } from '../../Store/CartSlice.js'

const ProductDetail = () => {
    const {params} = useParams()
    const [productDetail,setProductDetail]= useState(null)
    const [imageCount,setImageCount]= useState(0)
    const token = Cookies.get('token');
    const user = Cookies.get('user');
    console.log('Token from cookie:', token,user);
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
                })
            };
             fetchData(`/v1/product/getProductDetail`,options).then((data)=>
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

      })
       }
       
       fetchData("/v1/proudctdetail/cart",options).then((data)=>console.log("on added to cart",data))
         }
    // console.log("in parmas",params,productDetail[0]);
  return (
    <div>
      ProductDetail

      <div className='grid  grid-cols-10 gap-3 ' >
        <div className='col-span-3 ml-11 border flex flex-col items-center border-black  '>
     
          { productDetail && productDetail[0].productImg.map((img,i)=><div className='hover:cursor-pointer mt-4' onClick={()=>setImageCount(i)} key={i}><img className='w-16 h-24  content-center' src={img} alt="img" /></div>)}
        </div>
        <div className='col-span-7    '>
           Main Section
           { productDetail &&
           <div>
        <div className='flex justify-around'>
           <img className='h-[400px] p-10 rounded-2xl ' src={productDetail[0].productImg[imageCount]} alt="productimg"  />
              <h2 className='mt-28 max-w-60'>{productDetail[0]?.description}</h2>
           </div>
            <div className='flex justify-evenly'>
              <p className='line-through'>{productDetail[0]?.price}</p>
              <div>
                <button onClick={handlecart} className='bg-orange-600 p-7 rounded-xl text-white font-bold '>ADD TO CART</button>
               
              </div>
            </div>
           </div>
}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
