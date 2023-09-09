import React from 'react'
import { Link } from 'react-router-dom'

function RelatedPostItem({post}) {
  return (

      <div className="card">
        <Link to={`/post/${post?.id}`}>
          <img src={post?.image} className="card-image" alt={post?.title} />
        </Link>
        <div className="p-4">
          <Link to={`/post/${post?.id}`} className="text-lg post-title lws-RelatedPostTitle">
            {post?.title}
          </Link>
          <div className="mb-0 tags">
          {post?.tags?.map((tag,i)=> <span key={i}>#{tag}</span>)}
          </div>
          <p>{post?.createdAt}</p>
        </div>
      </div>
  )
}

export default RelatedPostItem
