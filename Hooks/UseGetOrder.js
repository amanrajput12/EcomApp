import { createAsyncThunk } from "@reduxjs/toolkit"
import fetchData from "../src/Utils/fetch.js"


const GetOrder = createAsyncThunk("data/fetchOrder", async(value)=>{
 const {token,user} = value
    const options = {
        method:"POST",
        headers:{
            'Content-Type':'application/json',
            'token':token,
            'user':user
        },
        body:JSON.stringify({
            user:user
        }),
 credentials: 'include'
       }

    const data = await    fetchData('https://ecomapp-5huy.onrender.com/v1/order/get',options)

    return data.dataproduct
})

export default GetOrder