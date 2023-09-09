import React from 'react'
import { Link } from 'react-router-dom';
function BlogItems({post}) {
  
  return (
    <Link to={`/post/${post.id}`}>
    <div className="lws-card">
    <a href="post.html">
      <img src={post?.image} className="lws-card-image" alt="" />
    </a>
    <div className="p-4">
      <div className="lws-card-header">
        <p className="lws-publishedDate">{post?.createdAt}</p>
        <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>{post?.likes}</p>
      </div>
      <a href="post.html" className="lws-postTitle"> {post?.title} </a>
      <div className="lws-tags">{post?.tags?.map((tag,i)=> <span key={i}>#{tag}</span>)}</div>
      <div className="flex gap-2 mt-4">
        <span className="lws-badge"> Saved </span>
      </div>
    </div>
  </div>
    </Link>
  )
}

export default BlogItems
