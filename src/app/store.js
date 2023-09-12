import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/post/postSlice";
import postsSlice from "../features/posts/postsSlice";
import  relatedPostSlice  from "../features/relatedPosts/relatedPostsSlice";
import SortSlice  from "../features/sort/sortSlice";
export const store = configureStore({
    reducer: {
        posts:postsSlice,
        post:postSlice,
        relatedPost: relatedPostSlice,
        filter:SortSlice
    },
  });
