import fetchData from "../src/Utils/fetch.js"


const ChangeCart = async(token,id,user,quantity,toast,dispatch,addProduct)=>{
    try {
        const option = {
          method:"POST",
           headers:{
             'Content-Type': 'application/json',
             'token':token
           },
           body: JSON.stringify({
             quantity:Number(quantity),
             product:id,
             user:user
           })
        }

     await    fetchData("https://mern-ecomapp-1.onrender.com/v1/proudctdetail/cartquantity",option).then((data)=>{
       console.log("data on update quantity",data)
       if(data.dataproduct.message === "Quantity change sucess" ){
         toast("Quantity change sucessfully")
          dispatch(addProduct(data.dataproduct.cart))
       }
     })
  } catch (error) {
     console.log("error on change cart",error.message);
  }
}

export default ChangeCart