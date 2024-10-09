import React, { useEffect, useState } from 'react'

export default function Filter() {
    const [name,setName] = useState("");

    const arr = [
        {
            name: "lipstics", 
            Brand: "Sugar",
            price: "₹599/-", 
            rating: "⭐⭐⭐⭐",
            image: "https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/Matte-Attack-Transferproof-Lipstick.jpg?v=1719855043&w=256&q=75"
        },

        {
            name: "Eye liner", 
            Brand: "sugar",
            price: "₹299/-", 
            rating: "⭐⭐",
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRRf1a8SJDs-K1QjHBJSJMKpWjoDv534gbau9p4fEj5zR8G58j2Pfv5F_DvmZh4T9q1olehlt72XaHP9Ss8Cmn0YUdU5DM-rbDgzdxxoUX6ltt9B8dZHPEMzEQ"
        },

        {
            name: "Nail Polish", 
            Brand: "sugar", 
            rating: "⭐⭐⭐⭐⭐",
            price: "₹149/-",
            image: "https://juicecosmetics.in/cdn/shop/files/X33_c24bc6ca-7fd2-4144-b28e-6bf130c2084a.jpg?v=1726759887&width=2000"
        },

        {
            name: "Foundation", 
            Brand: "sugar", 
            price: "₹699/-",
            rating: "⭐⭐⭐⭐⭐",
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRldR1WCFy3N4A3UXy6mKD0cJNMcByGT3_fWOGD15M8f4MhW_S7HcTb_-R6tgxahkf87PrE511j0rhkR69DqKr-cF57BvB0RwuwDpdVZvVhowkJElGtwNYguw"
        },

        {
            name: "Compact", 
            Brand: "Sugar", 
            price: "₹599/-",
            rating: "⭐⭐⭐⭐",
            image: "https://m.media-amazon.com/images/I/61C-V9yM88L._AC_UL480_FMwebp_QL65_.jpg"
        },

        {
            name: "Loose Powder", 
            Brand: "Sugar", 
            price: "₹799/-",
            rating: "⭐⭐⭐",
            image: "https://m.media-amazon.com/images/I/71-yW4U2bDL._AC_UL480_FMwebp_QL65_.jpg"
        },

        {
            name: "Compact", 
            Brand: "Sugar",
            price: "₹399/-", 
            rating: "⭐⭐⭐",
            image: "https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/Dream-Cover-SPF15-Mattifying-Compact.jpg?v=1719842368&w=256&q=75"
        },

        {
            name: "Make Up", 
            Brand: "Sugar",
            price: "₹899/-", 
            rating: "⭐⭐⭐⭐",
            image: "https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/SUGAR-Signature-Makeup-Kit.jpg?v=1719901641&w=256&q=75"
        },

        {
            name: "Lip oil", 
            Brand: "Sugar",
            price: "₹599/-", 
            rating: "⭐⭐⭐⭐",
            image: "https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/SUGAR-Play-Mega-Hype-Colour-Changing-Lip-Oil.jpg?v=1719899159&w=256&q=75"
        },

        {
            name: "Setting Mist", 
            Brand: "Sugar",
            price: "₹749/-", 
            rating: "⭐⭐⭐⭐",
            image: "https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/Grand-Finale-Highlighting-Setting-Mist_113a960f-fbba-45dc-b969-a9f18f56bcd2.jpg?v=1719861674&w=256&q=75"
        },

    ]

    const data = arr.filter((item) => item.name.includes(name));

        
  return (
    <div>
        
        <header>

            <div className='logo'>
                <img src="https://in.sugarcosmetics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNonCVLogoDesktop.86874a45.png&w=256&q=100" alt="" />
            </div>

            <div className='link'>
                <a href="">SUGARPLAY</a>
                <a href="">LIPS</a>
                <a href="">EYES</a>
                <a href="">FACE</a>
                <a href="">NAILS</a>
                <a href="">SKINCARE</a>
            </div>

            <div className='search'>
                <div id='sea'>
                    <input type="text" placeholder='search for cosmetics' onChange={(e) => setName(e.target.value)} />
                    <img style={{height:'20px', marginLeft:'-20px'}} src="https://cdn-icons-png.flaticon.com/128/1076/1076744.png" alt="" />
                </div>
            </div>

        </header>

        <div className="sec1">
            {/* <img src="https://media.tenor.com/1zlEOjxxrLEAAAAd/makeup-cosmetics.gif" alt="" /> */}
            /*<img src="https://i.pinimg.com/originals/76/96/87/769687a7992730a275fba56b91725510.gif" alt="" />
        </div>


        <br /><br />

        <div className='main'>
            {
                data &&
                data.map((e,i) => {
                    return <div className='cosmetic' key={i}>
                        <img src={e.image} alt="" />
                        <h5>{e.Brand}</h5>
                        <h3>{e.name} <span className='span'>12 shades</span></h3>
                        <h4>{e.price}</h4>
                        <h2>{e.rating}</h2>
                    </div>
                })
            }
        </div>

    </div>
  )
}

