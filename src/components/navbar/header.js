
import React from 'react'
import Logo from "../../assets/image/LWSBlog.svg"
function Header() {
  return (
    <nav class="py-4 border-b">
    <div class="navbar-container">
    
      <div class="logo">
        <a href="index.html">
          <img src={Logo} alt="search" />
        </a>
      </div>
      
      <div class="auth-buttons">
        <button class="btn btn-primary">sign in</button>
        <button class="btn btn-outline">sign up</button>
      </div>
    </div>
    </nav>
  )
}

export default Header
