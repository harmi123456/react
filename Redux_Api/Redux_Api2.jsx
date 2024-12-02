import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchApi } from '../Feature/Slice';
import { Link } from 'react-router-dom';

export default function Redux_Api2() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchApi())
    },[])

    const record = useSelector((state) => {
        return state.apiKey
    })

  return (
    <div>
      <h1>Redux_Api2</h1>
      
      <nav>
        <Link to="/Men">MEN</Link>
        <Link to="/Women">WOMEN</Link>
        <Link to="/Jewellery">Jewellery</Link>
        <Link to="/Electronic">Electronic</Link>
      </nav>

      {
        record.data &&
        record.data.map((e,i) => {
          return <ul key={i}>
            <li>{e.title}</li>
            <li>{e.price}</li>
            <img src={e.image} alt="" />
          </ul>
        })
      }
    </div>

   
  )
}
