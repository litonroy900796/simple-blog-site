import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../features/posts/postsSlice';
import Loading from '../ui/Loading';
import BlogItems from './blogItems'

function BlogGrid() {
  const dispatch=useDispatch();
  const {posts , isLoading, error , isError} = useSelector(state=> state.posts)
  const {filterSave , sortFilter} = useSelector(state=> state.filter)
  
  console.log(posts);
  useEffect(()=>{
    dispatch(fetchPosts(filterSave))
  },[dispatch,filterSave])
  let sortedData;
  if(sortFilter === "newest"){
     sortedData = [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }else if(sortFilter === "most_liked"){
   sortedData = posts.slice().sort((a, b) => b.likes - a.likes);
  }else{
    sortedData=posts
  }


  console.log("sort",sortedData);

  if(isLoading) return <Loading />
  if(isError && error) return <span>{error.message}</span>
  return (
    <>
      {
        !!sortedData.length && sortedData?.map((post) =>{
          return  <BlogItems key={post.id} post={post} />
        })
      }
  
    </>
  )
}

export default BlogGrid
