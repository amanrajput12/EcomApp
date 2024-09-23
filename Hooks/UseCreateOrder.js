import { useEffect } from "react";
import fetchData from "../src/Utils/fetch.js"
import GetCartData from "./UseGetCartData.js"
import { orders } from "../Store/OrderSlice.js";



const CreateOrder = (token,user,products,orderquantity,address,paymentMethod,BillAmount,BillStatus,toast,dispatch,navigate,_id)=>{
       console.log("token",token,user,products,orderquantity,address,paymentMethod,BillAmount,BillStatus,toast,dispatch,_id);
  
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
            orderquantity,
            BillAmount,
            BillStatus,
            _id
        }),
    credentials: 'include'
    }
    fetchData("https://ecomapp-5huy.onrender.com/v1/order/add",options).then((data)=>{
        console.log("on create order sucess",data)
        if(data.dataproduct.sucess){
            toast("Order created Sucessfully")
            navigate('/orderconfirm')
        }
        else if(!(data.dataproduct.sucess)){
            toast("Error on Creating Order")
        }
      
    })
}

export  default CreateOrder