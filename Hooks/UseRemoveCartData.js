import fetchData from "../src/Utils/fetch"


const RemoveCartData = async(token,user,product)=>{
  console.log('value on remove hook',token,user,product);
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
fetchData("https://mern-ecomapp-1.onrender.com/v1/proudctdetail/removedata",options).then((data)=>console.log("on remove from cart",data))


}

export default RemoveCartData