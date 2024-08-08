import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchData from "../src/Utils/fetch.js";


const GetProductDetail = createAsyncThunk("data/fetchProductDetail",async(value)=>{
    console.log("token on thunk",value);
    const {params,token} = value
    
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
    
  const resp =  await    fetchData(`https://mern-ecomapp-1.onrender.com/v1/product/getProductDetail`,options)
  console.log("resp",resp);
  
  return resp.dataproduct.data
   
})

export default GetProductDetail