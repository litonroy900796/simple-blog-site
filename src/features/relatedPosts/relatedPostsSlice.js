import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { relatedPostApi } from './relatedPostApi'

const initialState = {
  isLoading:false,
  relatedPost:[],
  isError:false,
  error:""
}

export const relatedFetchPost = createAsyncThunk("relatedPosts/relatedPostSlice",async ({id,tags})=>{
      const relatedPost=await relatedPostApi({id,tags});
      return relatedPost;
})


export const relatedPostSlice = createSlice({
  name: 'relatedPost',
  initialState,
  extraReducers: (builder)=>{
        builder
        .addCase(relatedFetchPost.pending,(state)=>{
            state.isLoading=true;
            state.isError= true;
        })
       .addCase(relatedFetchPost.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.relatedPost=action.payload;
            state.error="";
       })
        .addCase(relatedFetchPost.rejected, (state,action)=>{
            state.isLoading = false;
                state.relatedPost = [];
                state.isError = true;
                state.error = action.error?.message;
        })
  }
})



export default relatedPostSlice.reducer