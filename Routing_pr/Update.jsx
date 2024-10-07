import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Update({data,setData}) {
  const navigate = useNavigate();

  const [editname,setEditename] = useState();
  const [editsubject,setEditsubject] = useState();
  const [editindex, setEditindex] = useState();

  const handleEdit  = (id) => {
    let EditData = data.find((item) => item.id === id)
    if(EditData) {
      setEditename(EditData.name)
      setEditsubject(EditData.subject)
      setEditindex(id)
    } 
  }

  const handleUpdate = () => {
    if(editindex !== null) {
      const updateData = data.map((item) => 
        item.id === editindex
          ? {...item, name:editname, subject: editsubject}
          : item
      )

      setData(updateData)
      setEditindex(null)
      setEditename("")
      setEditsubject("")

      navigate("/")
    }
  }




  return (
    <div className='update'>
      <h1>Update</h1>

      <input value={editname} type="text" placeholder='Enter Your Name...' onChange={(e) => setEditename(e.target.value)} />
      <input value={editsubject} type="text" placeholder='Enter Your Subject...' onChange={(e) => setEditsubject(e.target.value)} />
      <button className='update' onClick={handleUpdate}>Update Data</button>


      <ol>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              {item.name} is learning {item.subject} 
              <button className='edit' onClick={() => handleEdit(item.id)}>Edit Data</button> <br />
            </li> 
          ))}
      </ol>


    </div>
  )
}
