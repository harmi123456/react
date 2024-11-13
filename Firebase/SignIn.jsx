import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate("")

    // const SignIn = async () => {
    //     let user = await signInWithEmailAndPassword(auth, email, password)
    //     console.log(user);
        
    //     if(user) {
    //         navigate("/dashboard")
    //     }
    // }

    const handleSignIn = () => {
      signInWithEmailAndPassword(auth,email,password)
      .then(user => {
        navigate("/dashboard")
      })
    }

  return (
    <div className='SignUp'>
        <h1>SignIn</h1>
        <div className="gif">
          <video src="./public/girl.MP4" autoPlay loop ></video>
        </div>

        <div className="content_1">
          <label htmlFor="">Name : </label>
          <input type="text" value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} /> <br />
          <label htmlFor=""> Email : </label>
          <input type="text" value={email} placeholder='Enter Email Id' onChange={(e) => setEmail(e.target.value)} /> <br />
          <label htmlFor="">Password : </label>
          <input type="text" value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} /> <br />
        </div>

        <button onClick={handleSignIn}>Sign In</button>

        {/* <Link to={"/dashboard"} className='link' >Dashboard</Link> */}

    </div>
  )
}
