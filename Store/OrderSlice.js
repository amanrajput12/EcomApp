import { createSlice } from "@reduxjs/toolkit";

import GetOrder from "../Hooks/UseGetOrder.js";



const OrderSlice = createSlice({
   name:"Order"  ,
   initialState:{
    address:null,
    paymentMethod:null,
    orders:[],
    loading:false,
    error:null
  
   },
   reducers:{
    addaddress: (state,action)=>{
        console.log("action payload",action.payload);
       state.address = action.payload
     
    },

    addpaymentMethod: (state,action)=>{
        console.log("action payload",action.payload);
        state.paymentMethod = action.payload
    },
    orders:(state,action)=>{
        state.orders = action.payload
    }

   },
   extraReducers:(builder)=>{
    builder.addCase(GetOrder.pending,(state)=>{
       state.loading=true;
       state.error= null
    })
    .addCase(GetOrder.fulfilled,(state,action)=>{
        state.loading=false;
        state.orders=action.payload
    })
    .addCase(GetOrder.rejected,(state,action)=>{
        state.loading= false;
        state.error=action.error.message
    })
   }
})
 export const {addaddress,addpaymentMethod,orders} = OrderSlice.actions

export default OrderSlice.reducer