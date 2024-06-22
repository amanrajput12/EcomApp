import { createSlice } from "@reduxjs/toolkit";


const OrderSlice = createSlice({
   name:"Order"  ,
   initialState:{
    address:null,
    paymentMethod:null
   },
   reducers:{
    addaddress: (state,action)=>{
        console.log("action payload",action.payload);
       state.address = action.payload
     
    },

    addpaymentMethod: (state,action)=>{
        console.log("action payload",action.payload);
        state.paymentMethod = action.payload
    }
   }
})
 export const {addaddress,addpaymentMethod} = OrderSlice.actions

export default OrderSlice.reducer