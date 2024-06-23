import { useEffect } from "react";
import fetchData from "../src/Utils/fetch.js"
import GetCartData from "./UseGetCartData.js"



const CreateOrder = (token,user,products,orderquantity,address,paymentMethod)=>{
       console.log("token",token,user,products,orderquantity,address,paymentMethod);
  
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'token':token
        },
        body: JSON.stringify({
            user,
            products,
            address,
            paymentMethod,
            orderquantity
        }),
    credentials: 'include'
    }
    fetchData("https://mern-ecomapp-1.onrender.com/v1/order/add",options).then((data)=>console.log("on create order sucess",data))
}

export  default CreateOrder