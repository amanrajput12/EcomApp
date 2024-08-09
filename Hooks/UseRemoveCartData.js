
import fetchData from "../src/Utils/fetch"
import { createAsyncThunk } from "@reduxjs/toolkit";



const RemoveCartData = createAsyncThunk("data/fetchRemove" ,async(value)=>{
  const {token,user,product,toast} = value
 ;
 
const  options ={
   method:"POST",
   headers:{
    'Content-Type':'application/json',
    'token':token 
   },
   body:JSON.stringify({
    product:product,
    user:user
   }),
    credentials: 'include'
}
 const data = await fetchData("https://mern-ecomapp-1.onrender.com/v1/proudctdetail/removedata",options)

if(data.dataproduct.message === "Product removed from the cart"){
  toast("product remove sucessfully")
  // dispatch(addProduct(data.dataproduct.cart))
  return data.dataproduct.cart
}


})

export default RemoveCartData