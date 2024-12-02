import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Jewellery() {
    const record = useSelector((state) => state.apiKey)

    const Jewellery = record.data.filter(item => item.category === "jewelery")
  return (
    <div>
        <h1>Jewellery</h1>
        <nav>
        <Link to='/'>ALL</Link>
        <Link to="/Men">MEN</Link>
        <Link to="/Women">WOMEN</Link>
        <Link to="/Jewellery">Jewellery</Link>
        <Link to="/Electronic">Electronic</Link>
      </nav>

      {
        Jewellery.map((e) => (
            <div>
                <img src={e.image} alt="" />
                <h2>{e.title}</h2>
                <h3>{e.price}</h3>
            </div>
        ))
      }
    </div>
  )
}
