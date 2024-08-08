import { createSlice } from "@reduxjs/toolkit";
import GetProductDetail from "../Hooks/UseGetProductDetail.js";


const ProductDetailSlice = createSlice({
    name:"ProductDetail",
    initialState:{
        loading:false,
        ProductImage:[],
        Description:null,
        price:0,
        discoutPercentage:0,
        error:null,
        category:null,
        rating:0,
        title:null,
        _id:null

    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(GetProductDetail.pending,(state)=>{
            state.loading=true
            state.error =null
        })
        .addCase(GetProductDetail.fulfilled,(state,action)=>{
            console.log("on redux",action.payload);
            state.loading = false;
            state.price = action.payload[0].price;
            state.category=action.payload[0].category;
            state.Description =action.payload[0].description;
            state.price=action.payload[0].price;
            state.category=action.payload[0].category;
            state.discoutPercentage=action.payload[0].discountPercentage;
            state.ProductImage=action.payload[0].productImg;
            state.title=action.payload[0].title;
            state.rating=action.payload[0].rating;
            state._id=action.payload[0]._id;
          
        })
    }
})

export default ProductDetailSlice.reducer