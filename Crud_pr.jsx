import React, { useEffect, useState } from 'react'

export default function Crud_pr() {

    const [name, setName] = useState("")
    const [task, setTask] = useState("")
    const [category, setCategory] = useState("")
    const [status, setStatus] = useState("")

    const [record, setRecord] = useState(null)
    const [editIndex, setEditIndex] = useState(null)

    useEffect(() => {
        let Data = JSON.parse(localStorage.getItem("Task")) || []
        setRecord(Data)
    }, [])

    const handleAdd = () => {

        if (!name || !task || !category) {
            alert("Please Fill Out all Fields Before Adding a Task.");
            return; 
        }

        console.log(name, task, category, status)

        let Task_Arr = {id : Date.now(), name, task, category, status : "Pending"}
        
        let OldRecord = JSON.parse(localStorage.getItem("Task")) || []

        if(editIndex){
            let SingleData = OldRecord.find((item) => item.id == editIndex)
            if(SingleData){
                SingleData.name = name
                SingleData.category = category 
                SingleData.task = task
                setEditIndex(null)
            }
        }
        else{
            OldRecord.push(Task_Arr)   
        }

        setRecord(OldRecord)
        localStorage.setItem("Task", JSON.stringify(OldRecord))

        setName("")
        setCategory("")
        setTask("")
    }

    const handleEdit = (id) => {
        let SingleData = record.find((item) => item.id == id)
        if(SingleData){
            setName(SingleData.name)
            setCategory(SingleData.category)
            setTask(SingleData.task)
            setEditIndex(id)
        }
    }

    const handleDelete = (id) => {
        let DeleteData = record.filter((item) => item.id != id)
        setRecord(DeleteData)
        localStorage.setItem("Task", JSON.stringify(DeleteData))
    }

    const handleComplete = (id) => {
        let SingleData = record.find((item) => item.id == id)
        
        if (SingleData) {
            SingleData.status = "Completed";
        }

        localStorage.setItem("Task", JSON.stringify(record))
        setRecord([...record])
    }



  return (
    <div>
        <center>
            <h1> Task Mnager</h1>
        </center>
            <div className='main'> <br />
                <label htmlFor="">Name : </label>
                <input required value={name} type="text" placeholder='Enter Your Name...' onChange={(e) => setName(e.target.value)} />
                <br />
                <label htmlFor="">Category : </label>
                <select required value={category} name="" id="" onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select Appropriate Option</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <br />
                <label htmlFor="">Task : </label>
                <select required value={task} name="" id="" onChange={(e) => setTask(e.target.value)} >

                <option value="">Select Your Task</option>
                    <option value="abc">abc</option>
                    <option value="xyz">xyz</option>
                    <option value="pqr">pqr</option>
                </select>
                <br /><br />
                <button onClick={() => handleAdd()}>{editIndex ? "Update Data" : "Add Data"}</button>

                <br /><br />
                

                <div className="task_manager">
                    {
                        record
                        ? record.map((e,i) => {
                            let BgColor

                            if(e.category === "High"){
                                BgColor = "rgba(232, 50, 33, 0.462)"
                            }
                            else if(e.category === "Medium"){
                                BgColor = "rgb(242, 191, 121)"
                            }
                            else if(e.category === "Low"){
                                BgColor = "rgba(183, 254, 183, 0.735)"
                            }
                            else{
                                BgColor = "none"
                            }

                            return <div className="task_div" key={i} style={{backgroundColor : BgColor}} >
                                <div className='left_div'>
                                    <h5>{e.status}</h5>
                                </div>
                                <div className="right_div">
                                    <h1>{e.task}</h1>
                                    <p>{e.name}</p>
                                    <span>Category : {e.category}</span>
                                    <br /><br />
                                    <button className='edit_btn' onClick={() => handleEdit(e.id)}>Edit</button>
                                    <button className='delete_btn' onClick={() => handleDelete(e.id)}>Delete</button>
                                    <button className='comp_btn' onClick={() => handleComplete(e.id)}>Complete</button>
                                </div>
                            </div>
                        })
                        : ""
                    }
                </div>
            </div>

    </div>
  )
}

