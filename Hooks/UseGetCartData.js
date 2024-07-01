
import fetchData from "../src/Utils/fetch.js"




const GetCartData = async (token,user,dispatch,addProduct)=>{
    
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
     return   fetchData("https://mern-ecomapp-1.onrender.com/v1/proudctdetail/cartdata",options).then((data)=>{
              if(data){
                console.log("data on the reduxt",data.dataproduct.data);
                dispatch(addProduct(data.dataproduct.data))
              }
            
                  })
                }

export default GetCartData