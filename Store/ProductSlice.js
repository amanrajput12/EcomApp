import { createSlice } from "@reduxjs/toolkit";



const ProductSlice = createSlice({
    name:"Product",
    initialState:{
        AppProduct:[]
    },
    reducers:{
        AllProducts:(state,action)=>{
            state.AppProduct = action.payload
        }
    }
})

export const {AllProducts} = ProductSlice.actions

export default ProductSlice.reducer