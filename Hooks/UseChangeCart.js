import { createAsyncThunk } from "@reduxjs/toolkit"
import fetchData from "../src/Utils/fetch.js"


const ChangeCart = createAsyncThunk("data/fetchCartChange" ,async(value)=>{
    try {
      const {token,id,user,quantity,toast} =value
        const option = {
          method:"POST",
           headers:{
             'Content-Type': 'application/json',
             'token':token
           },
           body: JSON.stringify({
             quantity:Number(quantity),
             product:id,
             user:user
           })
        }

    const data =  await    fetchData("https://ecomapp-5huy.onrender.com/v1/proudctdetail/cartquantity",option)

     console.log("data on update quantity",data)
     if(data.dataproduct.message === "Quantity change sucess" ){
       toast("Quantity change sucessfully")
       return data.dataproduct.cart
     }
  } catch (error) {
     console.log("error on change cart",error.message);
  }
})

export default ChangeCart