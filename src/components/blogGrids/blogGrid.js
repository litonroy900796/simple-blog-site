import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../features/posts/postsSlice';
import BlogItems from './blogItems'

function BlogGrid() {
  const dispatch=useDispatch();
  const {posts , isLoading, error , isError} = useSelector(state=> state.posts)
  console.log(posts);
  useEffect(()=>{
    dispatch(fetchPosts())
  },[dispatch])
  return (
    <div>
      <BlogItems />
    </div>
  )
}

export default BlogGrid
