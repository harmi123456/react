import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const SignUp = async () => {
        let user = await createUserWithEmailAndPassword(auth, email, password)
        console.log(user);


        if(user) {
            navigate("/dashboard")
        }

        setName("")
        setEmail("")
        setPassword("")
    }

  return (
    <div className='SignUp'>

        <h1>SignUp</h1>
        <input type="text" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='Enter Email Id' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <button onClick={SignUp} >Sign Up</button>
        <Link className='link' to={"/signIn"} >SignIn ?</Link>

    </div>
  )
}
