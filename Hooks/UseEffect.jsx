import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count,setCount] = useState(0)

    useEffect(() => {
        console.log("Create useEffect...")
    })

    useEffect(() => {
        console.log("Component did mount...")
    })

    useEffect(() => {
        console.log("Component Will Unmount...")
    },[])

    useEffect(() => {
        console.log("Component did Update....")
    },[count])

  return (
    <div>
        <h2>UseEffect Hooks</h2>
        <h4>Life Cycle : </h4>
        <li>Component did mount</li>
        <li>Component did Update</li>
        <li>Component will Update</li>
        
       <h1>{count}</h1>
       <button onClick={() => setCount (count + 1)} >ADD</button>
    </div>
  )
}
