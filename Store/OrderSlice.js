import { createSlice } from "@reduxjs/toolkit";


const OrderSlice = createSlice({
   name:"Order"  ,
   initialState:{
    address:null,
    paymentMethod:null,
    orders:[]
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

   }
})
 export const {addaddress,addpaymentMethod,orders} = OrderSlice.actions

export default OrderSlice.reducer