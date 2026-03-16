import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../store/themeSlice'
import productsReducer from '../store/productSlice'
import cartReducer from '../store/cartSlice'
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: productsReducer,
    cart: cartReducer,
  },
})

