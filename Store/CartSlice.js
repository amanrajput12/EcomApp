import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Products: [],
  totalAmount: 0,
  totalQuantity: 0
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
    addProduct: (state, action) => {
      state.Products = action.payload;
      const totals = calculateTotals(state.Products);
      state.totalAmount = totals.totalAmount;
      state.totalQuantity = totals.totalQuantity;
    }
  }
});

export const { addProduct } = CartSlice.actions;

export default CartSlice.reducer;
