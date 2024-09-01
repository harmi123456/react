import React from 'react'

export default function Sec4() {
  return (
    <div className='sec4'>
        <center>
            <h1>DEALS OF THE DAY</h1>
        </center>

        <div className="watermelon">

            <div className="dollar">

                <div className="fruit">
                    <div className="new">NEW</div>
                    <img src="strawbery.png" alt="" />
                </div>

                <div className="content">
                    <h2>Strawberry</h2>
                    <h3>$24.00</h3>
                    <hr />
                    <p>At Our Francisco design studio, our team <br /> designs every...</p>

                    <div className="cart_like">

                        <div className="cart">
                            <img src="https://static.vecteezy.com/system/resources/previews/012/414/422/non_2x/add-shopping-cart-icon-free-png.png" alt="" />
                            <h6>ADD TO CART</h6>
                        </div>
                        <div className="like">
                            <img src="like.png" alt="" />
                        </div>
                        <div className="search">
                            <img src="search.png" alt="" />
                        </div>

                    </div>
                </div>

            </div>

            <div className="dollar">

                <div className="fruit">
                    <div className="new">NEW</div>
                    <img src="watermelon.png" alt="" />
                </div>

                <div className="content">
                    <h2>Watermelon</h2>
                    <h3><strike>$22.00</strike> $19.00</h3>
                    <hr />
                    <p>At Our Francisco design studio, our team <br /> designs every...</p>

                <div className="cart_like">

                    <div className="cart">
                        <img src="https://static.vecteezy.com/system/resources/previews/012/414/422/non_2x/add-shopping-cart-icon-free-png.png" alt="" />
                        <h6>ADD TO CART</h6>
                    </div>

                    <div className="like">
                        <img src="like.png" alt="" />
                    </div>

                    <div className="search">
                        <img src="search.png" alt="" />
                    </div>

                </div>
            </div>

            </div>

        </div>

        

    </div>

  )
}
