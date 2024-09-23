
import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchData from "../src/Utils/fetch.js"




const GetCartData =  createAsyncThunk( "data/fetchCart",async (value)=>{
    
    const {token,user} =value
    console.log("in the frontend ",user,token);
   
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'token':token
            },
            body: JSON.stringify({
                user: user
            }),
    credentials: 'include'
        }
    const data = await  fetchData("https://ecomapp-5huy.onrender.com/v1/proudctdetail/cartdata",options)


                  if(data){
                    console.log("data on the reduxt",data.dataproduct.data);
                   return data.dataproduct.data
                  }
                })

export default GetCartData