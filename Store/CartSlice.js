import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name:"Cart",
    initialState:{
     Products:[]
    },
    reducers:{
        addProduct:(state,action)=>{
          state.Products = [...state.Products,action.payload]
        }
    }
})

export const {addProduct} = CartSlice.actions

export default CartSlice.reducer