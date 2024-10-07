import React from 'react'
import { Link } from 'react-router-dom';

export default function Home({data}) {
  return (
    <div className='Home'>
      <h1>Home</h1>

      <div className="squre"><Link id='link' to={"/Create"}>Create</Link> &nbsp;&nbsp;</div> <br />
      <div className="squre"><Link id='link'  to={"/Update"}>Update</Link> &nbsp;&nbsp;</div> <br />
      <div className="squre"><Link id='link'  to={"/Delete"}>Delete</Link> &nbsp;&nbsp;</div> <br />

      <ol className='p'>
        {data.map((item) => (
          <li key={item.id}>
            {item.name} is learning {item.subject}
          </li>
        ))}
      </ol>

    </div>
  )
}
