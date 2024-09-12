import React, { useState } from 'react'

export default function ControlledCom() {
    const [name,setName] = useState();
    const handleChange = ((e) => {
        console.log(e.target.value)
    })
  return (
    <div>
        <center>
            <h2>Enter any text</h2>
            <input type="text" onChange={(e) => handleChange(e)} />
        </center>
    </div>
  )
}
