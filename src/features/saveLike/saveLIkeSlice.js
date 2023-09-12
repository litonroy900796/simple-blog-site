import {createSlice } from '@reduxjs/toolkit'


const initialState = {
   newest:false,
   mostLike:false
}

export const SortSlice = createSlice({
  name: 'relatedPost',
  initialState,

})



export default SortSlice.reducer