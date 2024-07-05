import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";


import Cookies from "js-cookie"
import GetProduct from '../Hooks/UseGetProduct.js'
import { useDispatch, useSelector } from 'react-redux';
import { AllProducts } from '../Store/ProductSlice.js';
import  {  List  } from 'react-content-loader'

  function App() {
    const [loading, setLoading] = useState(true);
 
  const token = Cookies.get('token');
  console.log('Token from cookie:', token);
  const dispatch = useDispatch()
  const Products = useSelector((store)=>store.Product)

 useEffect(()=>{
   console.log("useefect of app call");
    GetProduct(token,dispatch,AllProducts).then(()=>{
      setLoading(false)
    })
 },[])

 const navigate = useNavigate()
 function handleDetail(id){
       navigate(`/Ecom/product-detail/${id}`)
 }
 const MyCodeLoader = () =>  <List/> 
   console.log("data is the ",Products.AppProduct);

  return (
    
    <>
 <div className="bg-white">
      <div className="mx-auto  max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  {loading && 
    <div className="flex flex-col">
   <MyCodeLoader  /> 
   <MyCodeLoader  /> 
   <MyCodeLoader  /> 
   <MyCodeLoader  /> 
   
   </div>
   }

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {Products?.AppProduct?.map((product) => (
            <div onClick={()=>handleDetail(product._id)} key={product._id} className="group relative">
              <div className="flex    flex-wrap justify-center  overflow-hidden rounded-lg bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-96">
                <img
                  src={product.productImg[0]}
                  alt={product.title}
                  className="w-[70vw]  h-80  p-4  object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                
                </div>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
