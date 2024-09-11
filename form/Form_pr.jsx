import React, { useEffect, useRef, useState } from 'react'

export default function () {

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = nameinputRef.current.value
    let mail = mailRef.current.value
    let contact = contactRef.current.value
    alert(`Name: ${name} , Email: ${mail} , Contact: ${contact}`)
  };

  const nameinputRef = useRef();
  const mailRef = useRef();
  const contactRef = useRef()

  const [count,setcount] = useState(0)

  const increase = () => {
    setcount (count + 1)
  }

  const decrease = () => {
    setcount (count - 1)
  }

  useEffect(() => {
    console.log("heii")
  },[])



  return (
    <div>

      <div className="main">
          <div className="form-container">

            <h1>Basic Information</h1>

            <form action="" onSubmit={handleSubmit}>

              <label htmlFor="">Enter Your Name: </label>
              <input type="text" ref={nameinputRef} name="name" onChange={handleChange} required />


              <label htmlFor="email">Email: </label>
              <input type="email" ref={mailRef} name="email"  onChange={handleChange} required />

              <label htmlFor="contact">Contact No: </label>
              <input type="number" ref={contactRef} name="contact" onChange={handleChange} required />

              <div id="select">

                <div style={{width: '70%'}}>
                  <label htmlFor="meal">Select Your Meal</label>
                  <select name="meal" onChange={handleChange} required>
                    <option value="">Select your Meal</option>
                    <option value="Panipuri">Panipuri</option>
                    <option value="Samosa">Samosa</option>
                    <option value="Dhosa">Dhosa</option>
                    <option value="Punjabi">Punjabi</option>
                    <option value="Chinese">Chinese</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quantity" style={{marginLeft: '30px'}}>Quality : </label>
                  
                  <div style={{display:"flex", marginLeft:"30px"}}>
                    <span>{count}</span>
                    <div style={{marginLeft:"10px"}}>
                      <button onClick={increase}><i class="fa-solid fa-plus"></i></button> <br />
                      <button onClick={decrease}><i class="fa-solid fa-minus"></i></button>
                    </div>
                  </div>

                </div>

              </div>

              <input type="submit" className="submit-button" value="Submit" onClick={()=>setisvisible(!isvisible)}/>

            </form>

          </div>


      </div>
    
    </div>
  )
}
