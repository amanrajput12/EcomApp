import { memo, useEffect, useState } from "react"
import fetchData from "../src/Utils/fetch";
const GetProduct = (token)=>{
    console.log("token in product get",token);
    const [product,setProduct]= useState(null)
    useEffect(()=>{
        const options = {
          method: "GET",
          headers: {
              'Content-Type': 'application/json',
              'token':token
          },
         
    credentials: 'include'
      };
         fetchData("/v1/product/getProduct",options).then((data)=>{
             console.log("in useeffect",data.dataproduct.result);
             setProduct(data.dataproduct.result)
         })
       
       
       },[token])
    return {product}
}

export default  GetProduct