import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../features/posts/postsSlice';
import Loading from '../ui/Loading';
import BlogItems from './blogItems'

function BlogGrid() {
  const dispatch=useDispatch();
  const {posts , isLoading, error , isError} = useSelector(state=> state.posts)
  console.log(posts);
  useEffect(()=>{
    dispatch(fetchPosts())
  },[dispatch])
  if(isLoading) return <Loading />
  if(isError && error) return <span>{error.message}</span>
  return (
    <>
      {
        !!posts.length && posts?.map((post) =>{
          return  <BlogItems key={post.id} post={post} />
        })
      }
  
    </>
  )
}

export default BlogGrid
