import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchData from "../src/Utils/fetch";

const GetProduct = createAsyncThunk("data/fetchProduct", async (token) => {
  try {
    const options = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'token': token,
      },
      credentials: 'include',
    };

    const data = await fetchData("https://ecomapp-5huy.onrender.com/v1/product/getProduct", options);
    return data.dataproduct.result; 
  } catch (error) {
    return {error:error.message}; 
  }
});

export default GetProduct;
