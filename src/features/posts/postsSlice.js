import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchPostsApi } from './postApi'

const initialState = {
  isLoading:false,
  posts:[],
  isError:false,
  error:""
}

export const fetchPosts = createAsyncThunk("posts/postsSlice",async ()=>{
      const posts=await fetchPostsApi();
      return posts;
})


export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder)=>{
        builder
        .addCase(fetchPosts.pending,(state)=>{
            state.isLoading=true;
            state.isError= true;
        })
       .addCase(fetchPosts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.posts=action.payload;
            state.error="";
       })
        .addCase(fetchPosts.rejected, (state,action)=>{
            state.isLoading = false;
                state.posts = [];
                state.isError = true;
                state.error = action.error?.message;
        })
  }
})



export default postsSlice.reducer