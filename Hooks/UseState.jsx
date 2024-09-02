import React, { useState } from 'react'

export default function UseState() {

  const [count,setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  const [name,setname] = useState("Tiger")

  const [arr,setarr] = useState([1,2,3,4,5])

  const [obj,setobj] = useState({name: "banana", type: "Fruit", description: "Healthy"})

  const [ArrObj, setArrObj] = useState([
    {
      name: "Apple", 
      description: "Good For Health"
    },
    {
      name: "Maggie", 
      description: "Unhealthy For Health"
    }
  ]);
  

  return (
    <div>

      <center>
      <h1>{count}</h1>
      <button onClick={increase} >Increase</button>
      <button onClick={decrease}>Decrease</button>

      <h1>{name}</h1>

      {
        arr.map((e,i) => {
          return <p>{e}</p>
        })
      }   
      {
        arr.filter((e,i) => {
          return e % 2 === 0
        })
      }   

      <h2>{obj.name} : {obj.type} </h2>
      <h4>description : {obj.description}</h4>

      {
        ArrObj.map((e,i) => {
          return <ul>
            <li>{e.name}</li>
            <li>{e.description}</li>
          </ul>
        })
      }
      <br /><br /><br />

      </center>

    </div>
  )
}
