import { configureStore } from '@reduxjs/toolkit'
import getPoducts from '../slices/getPoducts'
export const store = configureStore({
    reducer: {
      getPoducts
  }
})
