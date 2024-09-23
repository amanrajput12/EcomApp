
import fetchData from "../src/Utils/fetch.js";


const AddtoCart =  async(token,params,user,toast)=>{
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
       
      const data = await   fetchData("https://ecomapp-5huy.onrender.com/v1/proudctdetail/cart",options)

        console.log("data on added to cart",data.dataproduct.cart);
        if (data.dataproduct.message === "Proudct is already in the cart"){
            toast("Proudct is already in the car")
        }
        
        
        else if(data.dataproduct.message === "product added in the cart"){
          toast("product added in the cart")
        }
}

export default AddtoCart