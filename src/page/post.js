import React from 'react'
import PostDetails from '../components/post/post-details'
import RelatedPostGrid from '../components/related-post/related-post-grid'

function Post() {
  return (
    <section>
        <div class="container mt-8">
    <a href="index.html" class="inline-block text-gray-600 home-btn" id="lws-goHome"><i
        class="mr-2 fa-solid fa-house"></i>Go Home</a>
  </div>
  <div class="post-page-container">
     <PostDetails />
    <RelatedPostGrid />
  </div>
    </section>
  )
}

export default Post
