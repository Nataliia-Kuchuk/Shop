import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productServices } from "../Services/productServices";

const initialState = {
    products: [],
    loading: false,
    error:null,
}

export const getProductThunk = createAsyncThunk(
    'getProduct',
    async () => {
        const product = await productServices.getProducts();
        return product;
    },
);


const getProductReducer = createSlice({
  name: 'getProduct',
  initialState,
  extraReducers: {
    [getProductThunk.pending]: (state) => {
      state.loading = true
    },
    [getProductThunk.fulfilled]: (state, action) => {
      state.loading = false
      state.products = action.payload
    },
    [getProductThunk.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error
    }
  }
})

export default getProductReducer.reducer

