import { useState } from "react";
import fetchData from "../src/Utils/fetch"



const UserInfo = (fullName,email,phone,street,city,state,postalcode,token,user)=>{
    
    console.log("phone",phone);
   const options = {
    method:"POST",
    headers:{
        'Content-Type':'application/json',
        'token': token
    },
    body:JSON.stringify({
        fullName,
        email,
        phone:Number(phone),
        street,
        city,
        state,
        postalcode,
        user
    }),
    credentials: 'include'
   }

   return fetchData("https://mern-ecomapp-1.onrender.com/v1/address/add",options).then((data)=>{
    console.log("data on add adress",data);
        return data
     })

}

export {UserInfo}