import React, { useRef } from 'react'

export default function UncontrolledCom() {
    const inputRef = useRef();
    
    const handleClick = () => {
        let value = inputRef.current.value
        console.log(`Input value is ${value}`)
        alert(`Input value is ${value}`)
    }

  return (
    <div>
        <h2>UncontrolledCom</h2>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
