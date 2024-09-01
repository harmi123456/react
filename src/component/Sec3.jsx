import React from 'react'

export default function Sec3() {
  return (
    <div className='sec3'>

        <center>
            <h1>Our Best Seller</h1>
            <hr width="10%" color="green" size="0"/>
            <div className="new_arrival" id='new'>NEW ARRIVALS</div>
            <div className="new_arrival">BEST SELLERS</div>
            <div className="new_arrival">TOP RATES</div>

            <div className="product">
                <div className="strawberry">
                    <img src="https://frues-store-demo.myshopify.com/cdn/shop/products/1.1.jpg?v=1710297832" alt="" />
                    <h5>Strawberry</h5>
                    <h6>$24.00</h6>
                </div>
                <div className="strawberry">
                    <img src="https://frues-store-demo.myshopify.com/cdn/shop/products/9.1.jpg?v=1710297837" alt="" />
                    <h5>Apple</h5>
                    <h6>$20.00</h6>
                </div>
                <div className="strawberry">
                    <img src="https://frues-store-demo.myshopify.com/cdn/shop/products/6.1.jpg?v=1710297842" alt="" />
                    <h5>Raspberry fruits</h5>
                    <h6>$25.00</h6>
                </div>
                <div className="strawberry">
                    <img src="https://frues-store-demo.myshopify.com/cdn/shop/products/10.1.jpg?v=1710297846" alt="" />
                    <h5>Raspberry</h5>
                    <h6>$25.00</h6>
                </div>
            </div>

            <div className="product">
                <div className="strawberry">
                    <img src="https://frues-store-demo.myshopify.com/cdn/shop/products/12.1.jpg?v=1710297852" alt="" />
                    <h5>Pomegranate</h5>
                    <h6>$22.00</h6>
                </div>
                <div className="strawberry">
                    <img src="https://frues-store-demo.myshopify.com/cdn/shop/products/4.1.jpg?v=1710297856" alt="" />
                    <h5>Peach Fruit</h5>
                    <h6><strike>$22.00</strike> $20.00</h6>
                </div>
                <div className="strawberry">
                    <img src="https://frues-store-demo.myshopify.com/cdn/shop/products/7.1.jpg?v=1710297862" alt="" />
                    <h5>Mango</h5>
                    <h6><strike>$22.00</strike> $20.00</h6>
                </div>
                <div className="strawberry">
                    <img src="https://frues-store-demo.myshopify.com/cdn/shop/products/2.1.jpg?v=1710297867" alt="" />
                    <h5>Lychee fruit</h5>
                    <h6>$23.00</h6>
                </div>
            </div>
        
        </center>

        <div className="orange">

            <div className="clean_fruit">
                <img src="https://frues-store-demo.myshopify.com/cdn/shop/files/ba10.jpg?v=1710473694" alt="" />
            </div>

            <div className="clean_fruit" style={{backgroundColor: 'rgb(179, 135, 54)', color: 'white'}}>
                <center>
                    <p>Clean Fruit</p>
                    <h1>100% Pure <br /> Natural Fruit</h1>
                    <button>SHOP NOW</button>
                </center>
            </div>

            <div className="clean_fruit">
                <img src="https://frues-store-demo.myshopify.com/cdn/shop/files/ba9.jpg?v=1710473694" alt="" />
            </div>

            <div className="clean_fruit" style={{backgroundColor: 'tomato'}}>
                <center>
                    <p>Clean Fruit</p>
                    <h1>100% Pure <br /> Natural Fruit</h1>
                    <button>SHOP NOW</button>
                </center>
            </div>

        </div>
        
    </div>
  )
}
