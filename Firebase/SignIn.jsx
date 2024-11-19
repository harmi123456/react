import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn() {
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
    <div className='main_Sign'>

      <div className='SignUp'>
        <h1 style={{color:'purple'}}>SignIn</h1>
     

        <div className="content_1">
          <label htmlFor=""> Email : </label> <br />
          <input type="text" value={email} placeholder='Enter Email Id' onChange={(e) => setEmail(e.target.value)} /> <br />
          <label htmlFor="">Password : </label>
          <input type="text" value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} /> <br />
        </div>

        <button onClick={handleSignIn} className='Sign'>Sign In</button>

        {/* <Link to={"/dashboard"} className='link' >Dashboard</Link> */}

      </div>

    </div>
   
  )
}
