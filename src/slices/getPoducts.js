import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import { productServices } from '../Services/productServices'

const initialState = {
  products: [],
  loading: false,
  error: null
}

export const getProductThunk = createAsyncThunk('getProduct', async () => {
  const product = await productServices.getProducts()
  return product
})

const getProductSlice = createSlice({
  name: 'getProduct',
  initialState,
  reducers: {
    addNewProduct(state, action) {
      const { name, count, width, height, weight } = action.payload
      const newItem = {
        id: 100,
        name,
        imgUrl:
          'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
        count,
        size: {
          width,
          height
        },
        weight,
        coments: []
      }
      state.products = [...state.products, newItem]
    },
    deleteProduct(state, action) {
      state.products = state.products.filter((item) => item.id !== action.payload.id)
    },
    editProduct(state, action) {
        const findItem = state.products.find((item) => item.id == action.payload.id)
        console.log(current(findItem))
        
      
    }
  },
  extraReducers: {
    [getProductThunk.pending]: (state) => {
      state.loading = true
    },
    [getProductThunk.fulfilled]: (state, action) => {
      state.loading = false
      state.products = action.payload
    },
    [getProductThunk.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error
    }
  }
})

export const { addNewProduct, deleteProduct, editProduct } = getProductSlice.actions

export default getProductSlice.reducer
