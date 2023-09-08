import React from 'react'
import SiteFilter from "../components/filter/siteFilter"
import BlogGrid from '../components/blogGrids/blogGrid'
function Home() {
  return (
    <>
    <section class="wrapper">
    <aside>
      <SiteFilter />
    </aside>
    <main class="post-container" id="lws-postContainer">
        <BlogGrid />
        <BlogGrid />
    </main>
  </section>
    </>
  )
}

export default Home
