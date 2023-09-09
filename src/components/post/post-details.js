import React from 'react'

function PostDetails({post}) {
  return (
    <main className="post">
      <img src={post?.image} alt={post?.title} className="w-full rounded-md" id="lws-megaThumb" />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
         {post?.title}
        </h1>
        <div className="tags" id="lws-singleTags">
        {post?.tags?.map((tag,i)=> <span key={i}>#{tag}</span>)}
        </div>
        <div className="btn-group">
          <button className="like-btn" id="lws-singleLinks">
            <i className="fa-regular fa-thumbs-up"></i> {post.likes}
          </button>
          <button className="active save-btn" id="lws-singleSavedBtn">
            <i className="fa-regular fa-bookmark"></i> Saved
          </button>
        </div>
        <div className="mt-6">
          <p>
           {post?.description}
          </p>
        </div>
      </div>
    </main>
  )
}

export default PostDetails
