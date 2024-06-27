import { useEffect, useState } from "react"
import fetchData from "../src/Utils/fetch.js"


const GetPersonInfo = (token,user)=>{
  console.log("on getting address info",user);
  const [Address,setAddress]= useState(null)
    useEffect(()=>{
        const options = {
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'token':token
            },
            body:JSON.stringify({
                user:user
            }),
     credentials: 'include'
           }

            fetchData("/v1/address/get",options).then((data)=>{
            console.log(" user info for get delivery",data);
        setAddress(data)
           })
        
    },[])

     return {Address} 
    
}

export {GetPersonInfo}