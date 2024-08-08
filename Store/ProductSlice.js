import { createSlice } from "@reduxjs/toolkit";
import GetProduct from "../Hooks/UseGetProduct.js";



const ProductSlice = createSlice({
    name:"Product",
    initialState:{
        AppProduct:[],
        loading: false,
        error: null,
    },
    reducers:{ },
    extraReducers:(builder)=>{
        builder.addCase(GetProduct.pending,(state)=>{
       state.loading = true;
        state.error = null
        })
        .addCase(GetProduct.fulfilled,(state,action)=>{
            state.loading = false;
            state.AppProduct =action.payload
        })
        .addCase(GetProduct.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })
    }
})



export default ProductSlice.reducer