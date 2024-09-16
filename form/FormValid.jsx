import React, { useState } from 'react'

export default function FormValid() {
    const [name,Setname] = useState();
    const [nameErr,setnameErr] = useState();

    const [number,setnumber] = useState();
    const [numberErr,setnumberErr] = useState();

    const [Mail,setMail] = useState();
    const [MailErr,setMailErr] = useState();

    const handleChange = (e) => {
        e.preventDefault()

        if(!name) {
            setnameErr("name required....!")
        } else if(!/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)) {
            setnameErr("Please Enter Valid name")
        } else{
            setnameErr("Thank you")
            console.log("Form Submitted")
        }


        if(!number) {
            setnumberErr("Number required....!")
        } else if (!/^\d{10}$/.test(number)) {
            setnumberErr("Please Enter Valid Number")
        } else {
            setnumberErr("Thank you")
        }

        if(!Mail) {
            setMailErr("Email required....")
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Mail)) {
            setMailErr("Please Enter Valid Email")
        } else {
            setMailErr("Thank you")
        }
    }
 

  return (

    <div>
        <center>
            <h1>Registration Form</h1>
        </center>

        <div className="main">

            <form action="" onSubmit={ (e) => handleChange(e)}>

                <label htmlFor="">Name : </label> <br />
                <input type="text" placeholder='Name' onChange={(e) => Setname(e.target.value)} /> <br />
                <span>{nameErr}</span> <br /> <br />

                <label htmlFor="">Contact no :</label> <br />
                <input type="number" placeholder='Number' onChange={(e) => setnumber(e.target.value)} /> <br />
                <span>{numberErr}</span> <br /><br />
                
                <label htmlFor="">Email :</label> <br />
                <input type="email" placeholder='Email' onChange={(e) => setMail(e.target.value)} /> <br />
                <span>{MailErr}</span> <br />

                
                <button>Submit</button>

            </form>

        </div>

    </div>
  )
}
