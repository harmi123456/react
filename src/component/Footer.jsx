import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>

        <div className="foot">
            <div className="foot_logo">
                <img src="https://frues-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1710315612" alt="" />
            </div>
            <p>Subscribe our newsletter and get <br /> discount 30% off</p>
            <input type="text" className="mail" placeholder='Your Email address...' />
        </div>

        <div className="foot">
            <h4>Customer Care</h4>
            <hr color='black'  /> <br />    
            <a href="">About Us</a> <br />
            <a href="">Privacy Policy</a> <br />
            <a href="">Terms & Conditions</a> <br />
            <a href="">Products Return</a> <br />
            <a href="">Wholesale Policy</a>
        </div>

        <div className="foot">
            <h4>Quick Shop</h4>
            <hr color='black'  /> <br />    
            <a href="">Pagination</a> <br />
            <a href="">Terms & Conditions</a> <br />
            <a href="">Contact  </a> <br />
            <a href="">Accessories</a> <br />
            <a href="">Home Page</a>
        </div>

        <div className="foot">
            <h4>Company</h4>
            <hr color='black'  /> <br />    
            <a href="">Menu items</a> <br />
            <a href="">Help Center</a> <br />
            <a href="">Address Store</a> <br />
            <a href="">Privacy Policy</a> <br />
            <a href="">HomePage</a>
        </div>

    </div>
  )
}
