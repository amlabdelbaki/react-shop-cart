import {createSlice} from '@reduxjs/toolkit'
export const searchTermSlice = createSlice({
    initialState :'',
    name:'searchTermSlice',
    reducers:{
        setSearchTerm:(state,action)=>{return action.payload} 
    }

});

export const {setSearchTerm} =searchTermSlice.actions;
export default searchTermSlice.reducer;