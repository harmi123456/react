import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Electronic() {
    const record = useSelector((state) => state.apiKey)

    const electronic = record.data.filter(item => item.category === "electronics")

  return (
    <div>
        <h1>Electronic</h1>
        <nav>
        <Link to='/'>ALL</Link>
        <Link to="/Men">MEN</Link> &nbsp;
        <Link to="/Women">WOMEN</Link> &nbsp;
        <Link to="/Jewellery">Jewellery</Link> &nbsp;
        <Link to="/Electronic">Electronic</Link> &nbsp;
      </nav>

      {
        electronic.map((e) => (
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
