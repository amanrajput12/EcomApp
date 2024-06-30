import fetchData from "../src/Utils/fetch.js";


const AddtoCart = async(token,params,user,toast)=>{
    const options = {
        method:"POST",
        headers:{
          'Content-Type':'application/json',
          'token':token
        },
      body:JSON.stringify({
        product:params,
        quantity:Number(1),
        user:user

      }),
    credentials: 'include'
       }
       
       fetchData("/v1/proudctdetail/cart",options).then((data)=>{
        console.log("data on added to cart",data.dataproduct.cart);
        if (data.dataproduct.message === "Proudct is already in the cart"){
            toast("Proudct is already in the car")
        }
        
        
        else if(data.dataproduct.message === "product added in the cart"){
          toast("product added in the cart")
        }
        console.log("on added to cart",data.dataproduct.message)
         })
}

export default AddtoCart