import axios from "axios";

import CreateOrder from './UseCreateOrder.js'

const Payment = async(orderdata,cart,cartBalance,user,token,toast,dispatch,navigate)=>{
        console.log("order adress",orderdata.address);
        let BillAmount = "";
        let BillStatus = ""
        if(!orderdata.address){
          toast("Select Address");
          return null
        }
        if(!orderdata.paymentMethod){
          
          toast("Select PaymentMethod");
        return null
        }
          console.log("order is able");
       const productId= cart.Products.map((data)=>data.product._id )
         const orderquantity = cart.Products.map((data)=>({
          product:data.product._id,
          quantity:data.quantity
        }))
       
       
         if(!(orderdata.paymentMethod==="Cash")){
          console.log("online payment",orderdata.paymentMethod,cartBalance.totalAmount,cartBalance.totalquantity);
          try {
            const orderResponse = await axios.post("https://mern-ecomapp-1.onrender.com/v1/payment/checkout",{
              amount: cartBalance.totalAmount,
              cartItems: cartBalance.totalquantity,
              userShipping:orderdata.address,
              userId:user,
              token:token
            })
            console.log("on payment respon",orderResponse);
    
            const {orderId,amount}= orderResponse.data
                 
            var options = {
              "key": import.meta.env.VITE_KEY, // Enter the Key ID generated from the Dashboard
              "amount": amount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
              "currency": "INR",
              "name": "Ecom ",
              "description": "Test Transaction",
             
              "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
              "handler":async function (response){
                const paymentData = {
                  orderId:response.razorpay_payment_id,
                  paymentId:response.razorpay_order_id,
                  signature:response.razorpay_signature,
                  amount: cartBalance.totalAmount,
                  cartItems: cartBalance.totalquantity,
                  userId:user,
                  userShipping:orderdata.address,
                  token:token
                }
              const api = await axios.post("https://mern-ecomapp-1.onrender.com/v1/payment/verify-payment",paymentData)
                    console.log("on payment confirm",api);
                    const {_id} = api?.data?.data
                    console.log("id of payment",_id);
                    if(api.status == "200"){
                                BillAmount =cart.totalAmount,
                                BillStatus = "paid"
                      CreateOrder(token,user,productId,orderquantity,orderdata.address,orderdata.paymentMethod,BillAmount,BillStatus,toast,dispatch,navigate,_id)
                    }
              
              },
              "prefill": {
                  "name": "Aman Rajput",
                  "email": "Aman@gmail.com",
                  "contact": "9000090000"
              },
              "notes": {
                  "address": "Gandhinagar"
              },
              "theme": {
                  "color": "#3399cc"
              }
          };
          var rzp = new window.Razorpay(options)
          rzp.open()
    
          } catch (error) {
             console.log("error on payment",error.message);
          }
           return null
         }
        console.log("Product IDs:",productId);
        console.log("quantity:",orderquantity);
           BillAmount = cart.totalAmount;
           BillStatus  = "Not paid"
          
           
            
         
            CreateOrder(token,user,productId,orderquantity,orderdata.address,orderdata.paymentMethod,BillAmount,BillStatus,toast,dispatch,navigate)
           
      
}


export default Payment