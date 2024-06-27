import fetchData from "../src/Utils/fetch"


const RemoveCartData = async(token,user,product,toast)=>{
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
return fetchData("/v1/proudctdetail/removedata",options).then((data)=>{
  console.log("on remove from cart",data)
  if(data.dataproduct.message === "Product removed from the cart"){
    toast("product remove sucessfully")
  }
})


}

export default RemoveCartData