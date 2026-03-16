import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const fetchProducts = createAsyncThunk(
  'products/fetchByIdStatus',
  async () => {
      // const response = await fetch('https://dummyjson.com/products')
      const response = await fetch('/data/product.json')
      
      const data =await response.json()
      console.log("data")
    return data.products
  },
)

const initialState = {
  items: [],
  loading: 'idle',
  error:null,
  filters: {        // <--- MAKE SURE THIS EXISTS
    category: 'All',
    sortBy: 'newest',
    maxPrice: 500
    }
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // --- ADDED REDUCER TO HANDLE UPDATES ---
    updateFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        console.log(action.payload);
        
      // state.items.push([...action.payload])
      state.items=action.payload
      state.loading = "succeeded"
    }) .addCase(fetchProducts.pending, (state) => {
      state.loading="loading"
    })
    .addCase(fetchProducts.rejected, (state,action) => {
      state.loading="failed"
      console.log(action.error)
      state.error=action.error.message
    })

  },
})
    
export const selectAllProducts =(state)=>state.products.items;
export const selectProductStatus =(state)=>state.products.loading;
export const selectProductError =(state)=>state.products.error;

// --- ADDED SELECTOR FOR FILTERS ---
export const selectFilters = (state) => state.products.filters;
// --- ADD THIS SELECTOR FOR THE DETAILS PAGE ---
export const selectProductById = (state, productId) => 
  state.products.items.find(item => item.id === parseInt(productId));
// --- EXPORT THE NEW ACTION ---
export const { updateFilters } = productsSlice.actions;

export default productsSlice.reducer