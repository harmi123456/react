import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create({data, setData}) {
    const navigate = useNavigate();

    const[name,setName] = useState();
    const[subject, setSubject] = useState();

    const handlesubmit = () => {
        let obj = {id: data.length + 1, name: name, subject: subject};
        setData([...data, obj]);
        navigate("/")
    }
  return (
    <div>
        <h1>Create</h1>
        <input type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='Enter subject' onChange={(e) => setSubject(e.target.value)} />
        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}
