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
   })
}
fetchData("/v1/proudctdetail/removedata",options).then((data)=>console.log("on remove from cart",data))


}

export default RemoveCartData