import React from 'react'

export default function Navbar() {
  return (
    <nav className='header'>
        <div className="logo">
            {/* <img src="logo.png" alt="" /> */}
            <img src="https://frues-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1710315612" alt="" />
        </div>

        <div className="nav">
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">Featured</a>
            <a href="">Pages</a>
            <a href="">Blogs</a>
        </div>
        
        <div className="login">
          <div className="search">
            <input type="text" placeholder='search here' />
            <img src="search.png" alt="" />
          </div>
          {/* <img src="https://w7.pngwing.com/pngs/931/171/png-transparent-magnifying-glass-illustration-magnifying-glass-computer-icons-magnifying-glass-glass-mirror-desktop-wallpaper-thumbnail.png" alt="" /> */}
        </div>
    </nav>
  )
}
