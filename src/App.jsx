import { useEffect, useState } from 'react'


import Product from './ProducList/ProductSlice.jsx'
import Cookies from "js-cookie"
import GetProduct from '../Hooks/UseGetProduct.js'


  function App() {
    
 
  const token = Cookies.get('token');
  console.log('Token from cookie:', token);
 const getproduct = GetProduct(token)
   console.log("data is the ",getproduct.product);
  return (
    
    <>

 <Product products={getproduct?.product} />
      
    </>
  )
}

export default App
