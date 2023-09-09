import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { relatedFetchPost } from '../../features/relatedPosts/relatedPostsSlice';
import Loading from '../ui/Loading';
import RelatedPostItem from './related-post-item'

function RelatedPostGrid({id,tags}) {
  const dispatch=useDispatch();
  const {relatedPost , isLoading, error , isError} = useSelector(state=> state.relatedPost)
  
  useEffect(()=>{
    dispatch(relatedFetchPost({id,tags}))
  },[dispatch,id,tags])
  if(isLoading) return <Loading />
  if(isError && error) return <span>{error.message}</span>
  return (
    <>
    <aside>
    <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
    <div className="space-y-4 related-post-container">
    {!!relatedPost.length && relatedPost?.map((post,i)=>{
     return <RelatedPostItem key={i} post={post} />

    })}

    </div>
    </aside>
    </>
  )
}

export default RelatedPostGrid
