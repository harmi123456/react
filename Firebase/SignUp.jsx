import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

export default function SignUp() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [city, setCity] = useState();
    const [hobby, setHobby] = useState();

    const navigate = useNavigate();

    // const SignUp = async () => {
    //     let user = await createUserWithEmailAndPassword(auth, email, password)
    //     console.log(user);


    //     if(user) {
    //         navigate("/dashboard")
    //     }

    //     setName("")
    //     setEmail("")
    //     setPassword("")
    // }

    const handleSubmit = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then(data => {
        setDoc(doc(db, "users", data.user.uid), {
          name,email,city,hobby
        })
        console.log("added")
        navigate("/dashboard")
      })
    }

  return (
    <div className='SignUp'>
        <h1>SignUp</h1>
        <div className="gif">
          <video src="./public/girl.MP4" autoPlay loop ></video>
        </div>

        <div className='content'>

          <div className="form-group">
            <label htmlFor="">Name :</label> <br /> 
            <input type="text" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} /> <br />
            <label htmlFor="">Email : </label> <br /> 
            <input type="text" placeholder='Enter Email Id' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
            <label htmlFor="">Password : </label> <br />
            <input type="text" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
          </div>

          <div className="form-group">
            <label htmlFor="">City : </label> <br />
            <input type="text" placeholder='Enter City name' value={city} onChange={(e) => setCity(e.target.value)} /> <br />
            <label htmlFor="">Hobby : </label> <br />
            <input type="text" placeholder='Enter Hobby' value={hobby} onChange={(e) => setHobby(e.target.value) } /> <br />
            <label htmlFor="">Number : </label> <br />
            <input type="number" placeholder='Enter Contact number' />
          </div>

        </div>

        <button onClick={handleSubmit} >Sign Up</button>
        <Link className='link' to={"/signIn"} >SignIn ?</Link>

    </div>
  )
}
