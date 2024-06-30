import { memo, useEffect, useState } from "react"
import fetchData from "../src/Utils/fetch";
const GetProduct = async(token,dispatch,AllProducts)=>{
    console.log("token in product get",token);
    
 
        const options = {
          method: "GET",
          headers: {
              'Content-Type': 'application/json',
              'token':token
          },
         
    credentials: 'include'
      };
     return    fetchData("/v1/product/getProduct",options).then((data)=>{
             console.log("product data",data.dataproduct.result);
              dispatch(AllProducts(data.dataproduct.result))
         })
       
       
       
    
}

export default  GetProduct