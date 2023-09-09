import React from 'react'
import SiteFilter from "../components/filter/siteFilter"
import BlogGrid from '../components/blogGrids/blogGrid'
function Home() {
  return (
    <>
    <section className="wrapper">
    <aside>
      <SiteFilter />
    </aside>
    <main className="post-container" id="lws-postContainer">
        <BlogGrid />
     
    </main>
  </section>
    </>
  )
}

export default Home
