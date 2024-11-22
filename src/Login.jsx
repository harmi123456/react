import React, { useState } from 'react'
// import {auth, Provider } from 'react-redux'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from "../goggleConfig"
import { Link, useNavigate } from 'react-router-dom'
// import { Provider } from 'react-redux'

export default function Login({setUser, setPhoto}) {
  const navigate = useNavigate()

  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [number, setNumber] = useState()
  const [email, setEmail] = useState()

  const handleLogin = async () => {
    await signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user
      console.log(user);
      setUser(user.displayName)
      navigate('/dashboard')

    })
  }

  

  return (
    <div className='main'>
      <div className="login-container">
        <h1>Login with Google</h1>
        <div className="form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="name">Email:</label>
            <input type="email" id="name" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="number">Number:</label>
            <input type="number" id="number" placeholder="Enter Number" value={number} onChange={(e) => setNumber(e.target.value)} />
          </div>
              {/* <button onClick={handleLogin} className="login-button">
                Click Me
              </button> */}
          <Link onClick={handleLogin} to="/dashboard" className="login-button" > Click me </Link>
        </div>
      </div>
    </div>
  )
}
