import { createSlice } from "@reduxjs/toolkit";
import GetCartData from "../Hooks/UseGetCartData.js";
import ChangeCart from "../Hooks/UseChangeCart.js";
import RemoveCartData from "../Hooks/UseRemoveCartData.js";

const initialState = {
  Products: [],
  totalAmount: 0,
  totalQuantity: 0,
  loading:false,
  error:null
};

const calculateTotals = (Products) => {
  let totalAmount = 0;
  let totalQuantity = 0;

  Products.forEach((data) => {
    console.log("quantity",data.quantity);
    const discount = (data.product.discountPercentage * data.product.price * data.quantity) / 100;
    totalAmount += (data.product.price * data.quantity) - discount;
    totalQuantity  = Number(totalQuantity) + Number(data.quantity)
  });
    totalAmount = Math.round(totalAmount)
  return { totalAmount, totalQuantity };
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
  },
  extraReducers:(builder)=>{
   builder.addCase(GetCartData.pending,(state)=>{
       state.loading =true;
       state.error= null
   })
   .addCase(GetCartData.fulfilled,(state,action)=>{
       state.loading=false;
       state.Products=action.payload
       const totals = calculateTotals(state.Products);
       state.totalAmount = totals.totalAmount;
       state.totalQuantity = totals.totalQuantity;
   })
   .addCase(GetCartData.rejected,(state,action)=>{
       state.loading=false;
       state.error=action.error.message
   })
   .addCase(ChangeCart.pending,(state)=>{
    state.error= null
   })
   .addCase(ChangeCart.fulfilled,(state,action)=>{
    state.loading=false;
       state.Products=action.payload
       const totals = calculateTotals(state.Products);
       state.totalAmount = totals.totalAmount;
       state.totalQuantity = totals.totalQuantity;
   })
   .addCase(ChangeCart.rejected,(state,action)=>{
    state.loading=false;
    state.error=action.error.message
   })
   .addCase(RemoveCartData.fulfilled,(state,action)=>{
    state.loading=false;
       state.Products=action.payload
       const totals = calculateTotals(state.Products);
       state.totalAmount = totals.totalAmount;
       state.totalQuantity = totals.totalQuantity;
   })
   .addCase(RemoveCartData.rejected,(state,action)=>{
    state.loading=false;
    state.error=action.error.message
   })

  }
});



export default CartSlice.reducer;
