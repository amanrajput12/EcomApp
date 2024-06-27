import { useEffect, useState } from "react"
import fetchData from "../src/Utils/fetch.js"



const GetCartData = (token,user)=>{
    const [cartData,setCartData] = useState(null)
    console.log("in the frontend ",user,token);
    useEffect(()=>{
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
        fetchData("/v1/proudctdetail/cartdata",options).then((data)=>setCartData(data?.dataproduct))
      
    },[])
    return  {cartData}
}

export default GetCartData