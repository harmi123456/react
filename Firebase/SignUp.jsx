import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';

export default function SignUp() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [city, setCity] = useState();
  const [hobby, setHobby] = useState();
  const [task, setTask] = useState();
  const [priority, setPriority] = useState();
  const [status, setStatus] = useState();
  const [showPopUp, setShowPopUp] = useState(false);

  // const navigate = useNavigate();


  const handleSignUp = async () => {

    if (!name || !email || !password || !city || !hobby) {
      alert('Please fill in all fields!');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        setDoc(doc(db, "users", data.user.uid), { name, email, city, hobby })
        setShowPopUp(true)
      })
    setName("")
    setEmail("")
    setPassword("")
    setPassword("")
    setCity("")
    setHobby("")
  }


  useEffect(() => {
    if (showPopUp) {
      const popup = document.getElementById("popup");
      const pop = document.getElementById("pop");

      if (popup && pop) {
        popup.style.visibility = "visible";

        pop.style.height = "0px";
        pop.style.width = "0px";
        pop.style.transition = "height 1s ease, width 1s ease";

        setTimeout(() => {
          pop.style.height = "100%";
          pop.style.width = "100%";
        }, 0);
      }
    }
  }, [showPopUp]);




  const handleDone = () => {
    if (!task || !priority || !status) {
      alert('Please fill in all task details!');
    }

    const userDocRef = doc(db, 'users', auth.currentUser.uid)

    getDoc(userDocRef)
      .then((userDoc) => {
        const currentData = userDoc.exists() ? userDoc.data() : {}
        const currentTask = currentData.tasks || []

        const updateTasks = [...currentTask, { task, priority, status }]

        return setDoc(userDocRef, { tasks: updateTasks }, { merge: true })
      })
      .then(() => {
        alert("task added successfully")
        setTask("")
        setPriority("")
        setStatus("")
      })
  }

  // const handleSubmit = () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //   .then(data => {
  //     setDoc(doc(db, "users", data.user.uid), {
  //       name,email,city,hobby
  //     })
  //     console.log("added")
  //     navigate("/dashboard")
  //   })
  // }

  return (

    <div className="main_Sign">

      <div className='SignUp'>
        <h1>SignUp</h1>

        <div className="plus" onClick={() => setShowPopUp(!showPopUp)}>
          {
            showPopUp ?
              <i class="fa-solid fa-minus"></i>
              :
              <i class="fa-solid fa-plus"></i>
          }
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
            <input type="text" placeholder='Enter Hobby' value={hobby} onChange={(e) => setHobby(e.target.value)} /> <br />
            <label htmlFor="">Number : </label> <br />
            <input type="number" placeholder='Enter Contact number' />
          </div>

        </div>

        <button onClick={handleSignUp} id='animate' className='Sign'>Sign Up</button>


        {showPopUp && (
          <>

            <div id='popup'>
              <div className="task_con" id='pop'>
                <h2>Enter Tasks & Its Priorities</h2>

                {/* <label htmlFor="taskSelect">Task</label> */}
                <select name="task" id="taskSelect" value={task} onChange={(e) => setTask(e.target.value)}>
                  <option value="" disabled>Select Task</option>
                  <option value="Slides Prep">Slides Prep</option>
                  <option value="DB Update">DB Update</option>
                  <option value="React App">React App</option>
                  <option value="App Testing">App Testing</option>
                </select>

                {/* <label htmlFor="prioritySelect">Priority</label> */}
                <select name="priority" id="prioritySelect" value={priority} onChange={(e) => setPriority(e.target.value)}>
                  <option value="" disabled>Select Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>

                {/* <label htmlFor="statusSelect">Status</label> */}
                <select name="status" id="statusSelect" value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="" disabled>Select Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="In process">In Process</option>
                </select>

                <button onClick={handleDone}>Add Task</button>
              </div>
            </div>

          </>
        )}

        <br />
        <Link className='link' to={"/signIn"} >SignIn ?</Link>

      </div>

    </div>
  )
}
