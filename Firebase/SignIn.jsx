import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate("")

    const SignIn = async () => {
        let user = await signInWithEmailAndPassword(auth, email, password)
        console.log(user);
        
        if(user) {
            navigate("/dashboard")
        }
    }

  return (
    <div className='SignUp'>
        <h1>SignIn</h1>
        <input type="text" value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
        <input type="text" value={email} placeholder='Enter Email Id' onChange={(e) => setEmail(e.target.value)} />
        <input type="text" value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />

        <button onClick={SignIn}>Sign In</button>

        <Link to={"/dashboard"} className='link' >Dashboard</Link>

    </div>
  )
}
