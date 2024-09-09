import React, { useEffect, useRef } from 'react'

export default function Key() {
    const arr = ["Apple","Mango","Orange","banana","Graps"]

    const inputRef = useRef();

    const handleclick = () => {
        inputRef.current.focus();
        let p = inputRef.current.value
        alert(`the value is ${p}`)
    }

    useEffect(() => {
        setTimeout(() => {
            inputRef.current.focus();
            let p = inputRef.current.value
            alert(`the value is ${p}`)    
        }, 3000);
    },[])

  return (
    <div>
        <h1>List Key</h1>
        {
            arr.map((e,i) => {
                return <p key={i} >{e}</p>
            })
        }

        <h1>UseRefExp1</h1>
        <input type="text" ref={inputRef} />
        <button onClick={handleclick}>click</button>

    </div>
  )
}
