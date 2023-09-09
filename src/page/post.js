import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import PostDetails from '../components/post/post-details'
import RelatedPostGrid from '../components/related-post/related-post-grid'
import { singleFetchPost } from '../features/post/postSlice';
import Loading from '../components/ui/Loading';

function Post() {
  const params = useParams();
  console.log(params);
  const dispatch =useDispatch();
  const {post , isLoading, error , isError} = useSelector(state=> state.post)
  useEffect(()=>{
    dispatch(singleFetchPost(params.postId))
  },[params, dispatch]);

  if(isLoading) return <Loading />
  if(isError && error ) return <span>{error.message}</span>

  return (
    <section>
        <div className="container mt-8">
    <Link to="/" className="inline-block text-gray-600 home-btn" id="lws-goHome"><i
        className="mr-2 fa-solid fa-house"></i>Go Home</Link>
  </div>
  <div className="post-page-container">
     <PostDetails post={post} />
    <RelatedPostGrid id={post?.id} tags={post?.tags} />
  </div>
    </section>
  )
}

export default Post
