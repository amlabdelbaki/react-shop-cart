import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk('productsSlice/fetchProducts', async ()=>{
  const api = "https://dummyjson.com/products?limit=30";
    const res = await fetch(api);
    const data = await res.json();
    return data.products ;
     
})
const productsSlice = createSlice({
    initialState:[],
    name:"productsSlice",
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            return action.payload;
        })
    }
    
})

export const {} = productsSlice.actions;
export default  productsSlice.reducer;