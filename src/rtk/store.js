import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/product-slice'
import cartSlice  from './slices/cart-slice';
import searchTermSlice  from './slices/search-slice';


export const store = configureStore({
    reducer:{products:productsSlice,
        cart:cartSlice,
        search:searchTermSlice
    }

})