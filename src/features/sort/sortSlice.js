import {createSlice } from '@reduxjs/toolkit'


const initialState = {
    filterSave: "all",
    sortFilter:""
}

export const SortSlice = createSlice({
  name: 'filter',
  initialState,
  reducers:{
      SetFilterSave:(state,action)=>{
       state.filterSave =action.payload

      },
    SetSortFilter:(state,action)=>{
     state.sortFilter = action.payload
    }
  }
})


export const {SetFilterSave,SetSortFilter} =SortSlice.actions;
export default SortSlice.reducer