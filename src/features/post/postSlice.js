import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { singlePostApi } from './singlePostApi'

const initialState = {
  isLoading:false,
  post:[],
  isError:false,
  error:""
}

export const singleFetchPost = createAsyncThunk("post/postsSlice",async (id)=>{
      const post=await singlePostApi(id);
      return post;
})


export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers:{
    AddLikes:(state,action)=> {
         state=state.post.likes +=1
         
    } 
 },
  extraReducers: (builder)=>{
        builder
        .addCase(singleFetchPost.pending,(state)=>{
            state.isLoading=true;
            state.isError= true;
        })
       .addCase(singleFetchPost.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.post=action.payload;
            state.error="";
       })
        .addCase(singleFetchPost.rejected, (state,action)=>{
            state.isLoading = false;
                state.post = [];
                state.isError = true;
                state.error = action.error?.message;
        })
  }
})


export const {AddLikes}=postSlice.actions
export default postSlice.reducer