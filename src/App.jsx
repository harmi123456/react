  import React, { useState } from 'react'
  import Login from './Login'
  import { BrowserRouter, Route, Routes } from 'react-router-dom'
  import Dashboard from './Dashboard'

  export default function App() {
    const [user, setUser] = useState("")
    // const [photo, setPhoto] = useState("")
    return (
      <div>
        {/* <Login/> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login setUser={setUser} />} ></Route>
            <Route path='/dashboard' element={<Dashboard user={user} />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
