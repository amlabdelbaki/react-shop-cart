
import {createSlice} from '@reduxjs/toolkit'
export const cartSlice = createSlice({
    initialState:[],
    name:"cartSlice",
    reducers:{
        addToCart:(state,action)=>{

            const productExist = state.find((product)=> product.id === action.payload.id)
            if(productExist){
             productExist.qty+= 1;
             
            }else{
              const clonedProduct ={...action.payload,qty:1};
                return [...state,clonedProduct]
            }
          

        },
        removeFromCart:(state,action)=>{
            return state.filter((item)=>item.id !== action.payload.id)

        },
        clearCart:(state,action)=>{
            return [];

        }
    },
})

export const {addToCart,removeFromCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;