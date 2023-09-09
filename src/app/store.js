import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/post/postSlice";
import postsSlice from "../features/posts/postsSlice";
export const store = configureStore({
    reducer: {
        posts:postsSlice,
        post:postSlice
    },
  });
