import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, updateData } from '../Feature/Slice';

export default function Redux_task() {
    const [name, setName] = useState("");
    const [networth, setNetworth] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [editIndex, setEditIndex] = useState("");
    const [radioValue, setRadioValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');
    const [checkboxValue, setCheckboxValue] = useState(false);

    const handleRadioChange = (event) => {
        setRadioValue(event.target.value);
    };
    
      const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };
    
      const handleCheckboxChange = (event) => {
        setCheckboxValue(event.target.checked);
    };


    const InputRef = useRef();

    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todo.todoKey);
  
    const addRecord = (event) => {
        event.preventDefault();

        console.log('Radio Value:', radioValue);
        console.log('Textarea Value:', textareaValue);
        console.log('Checkbox Value:', checkboxValue);

        console.log("Dispatching data : " ,{name, networth, number, email, radioValue})
        // dispatch(addData({id: Date.now(), name, number, email}))

        if(editIndex === null || editIndex === "") {
            dispatch(addData({id: Date.now(), name, networth, number, email, radioValue}))
        } else {
            dispatch(updateData({id: editIndex, name, networth, number, email, radioValue}))
            setEditIndex(null)
        }

        // setDataVisible(true);
        setName("")

        setName("")
        setNetworth("")
        setNumber("")
        setEmail("")
        setRadioValue("")
        setCheckboxValue("")
        InputRef.current.focus();
    } 

    const deleteRecord = (id) => {
        console.log("deleted id : " + id)
        dispatch(deleteData(id))
        setName("")
        setNetworth("")
        setNumber("")
        setEmail("")
        setRadioValue("")
        InputRef.current.focus();   
    }

    const editRecord = (id) => {
        console.log("edit id")
        let singleData = todoList.find((item) => item.id == id)
        setName(singleData.name)
        setNumber(singleData.number)
        setEmail(singleData.email)
        setNetworth(singleData.networth)
        setEditIndex(id)
    }

    useEffect(() => {
        let show = document.getElementById("show")
        show.addEventListener("click", function() {
            let main_form_data = document.getElementById("main_form_data")
            main_form_data.style.height = '33%'
            main_form_data.style.transition = "2s"
        })  
    }, [])

  return (
    
    <div>

        <div className="form_bg">
            <center> <br /><br /><br />
                <h2>Please Fill some Basic Details about Yourself</h2>
            </center>

            <form action="" className="form-container">

                <div className='first'>
                    <div style={{width:'45%'}}>
                        <label htmlFor="">First name : </label>
                        <input ref={InputRef} type="text" placeholder='Enter First Name' required value={name} onChange={(e) => setName(e.target.value)} /> <br />
                    </div>
                    <div style={{position:'relative', left:'-35px', width:'45%'}}>
                        <label htmlFor="">Last name : </label>
                        <input type="text" placeholder='Enter Last name' required value={networth} onChange={(e) => setNetworth(e.target.value)} /> <br /> 
                    </div> 
                </div>
                <br />
                <label htmlFor="">Contact no: </label> 
                <input type="number" placeholder='enter number' required value={number} onChange={(e) => setNumber(e.target.value)} /> <br />
                <label htmlFor="">Email Id: </label>
                <input type="text" placeholder='Enter mail id ' required value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                
                <div style={{width:'70%', position:'relative', left:'200px', top:'20px'}}>
                    <select name="" id="minor">
                        <option value="">Age</option>
                        <option value="">Minor</option>
                        <option value="">Adult</option>
                    </select>
                </div>            
                {/* Radio Buttons */}
                <label style={{marginTop:'-8px'}} htmlFor="">Select Your Gender : </label>
                <div style={{display:'flex'}}>
                    <label>
                        <input type="radio" value="Male" checked={radioValue === 'Male'} onChange={handleRadioChange} />
                        &nbsp; Male
                    </label> &nbsp;&nbsp;&nbsp;

                    <label>
                        <input type="radio" value="Female" checked={radioValue === 'Female'} onChange={handleRadioChange}/>
                        &nbsp; Female
                    </label>
                </div>
                <br />

                {/* Textarea */}
                <label htmlFor="">Comments: </label>
                <label>
                    <textarea value={textareaValue} onChange={handleTextareaChange}  />
                </label>

                <br />

                {/* Checkbox */}
                <label>
                    <input type="checkbox" checked={checkboxValue} onChange={handleCheckboxChange} />
                &nbsp; Agree to terms & Conditiions
                </label>

                <br />

                <button id='show' onClick={addRecord}> {editIndex ? "Update Data" : "Add Data"}</button>

            </form>

        </div>

        <div>
            
            <div id='main_form_data' className="main_form_data">
                <div id='company_data' className="company-list" >
                    {
                        todoList.map((e,i) => (
                            <div key={i}>
                                <p style={{color:'transparent'}}>{e.id}</p>
                                <h1>name : {e.name + " "+ e.networth}</h1>
                                <p>number : {e.number}</p>
                                <h4>email : {e.email}</h4>
                                <h5>Gender : {e.radioValue}</h5>
                                <button className="edit-btn" onClick={() => editRecord(e.id)}>Edit</button>
                                <button className="delete-btn" onClick={() => deleteRecord(e.id)}>Delete</button>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>

    </div>

  )
}
