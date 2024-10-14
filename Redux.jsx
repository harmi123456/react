//Day 1

// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment } from '../Feature/Slice'

// export default function Redux() {
//     const count = useSelector((state) => {
//       return state.counterKey
//     })

//     const dispatch = useDispatch();

//   return (
//     <div>
//         <h1>Redux</h1>
//         <h1>{count.count}</h1>

//         <button onClick={() => dispatch(increment())}>+</button>
//         <button onClick={() => dispatch(decrement())}>-</button>
//     </div>
//   )
// }



//Day 2

import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData } from '../Feature/Slice';

export default function Redux() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('')

  const count = useSelector((state) => {
    return state.todoKey
  })

  const dispatch = useDispatch();

  const addRecord = () => {
    dispatch(addData({ id: Date.now(), name, subject}))
    setName("")
    setSubject("")
  }

  const deleteRecord = (id) => {
    dispatch(deleteData(id))
  }

  return (
    <div>
      <h1>REDUX</h1>
      <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
      <button onClick={addRecord}>add Data</button>

      {
        count ?
          count.students.map((e,i) => {
            return <ul key={i}>
                <li>{e.id}</li>
                <li>{e.name}</li>
                <li>{e.subject}</li>
                <button>Edit</button>
                <button onClick={() => deleteRecord(e.id)}>Delete</button>
            </ul>
          })
          :
          <p>No Data</p>
      }
    </div>
  )
}
