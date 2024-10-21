import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AxiosApi() {

    const [data, setData] = useState("");

    const [newTitle, setNewTitle] = useState('');
    const [newViews, setNewViews] = useState('');
    const [newAccessories, setNewAccessories] = useState('');
    const [newImage, setNewImage] = useState("");

    const [EditId, setEditId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editViews, setEditViews] = useState('');
    const [editAccessories, setEditAccessories] = useState('');
    const [editImage, setEditImage] = useState("");

    useEffect(() => {
        FetchApi();
    },[])

    const FetchApi = async () => {
        const response = await axios.get("http://localhost:5000/cars")
        console.log(response.data)
        setData(response.data)
    }

    const addData = async () => {

        const newcar = { title: newTitle, views: newViews, accessories: newAccessories, image: newImage}
        let addResponse = await axios.post("http://localhost:5000/cars", newcar)
        console.log(addResponse)
        setData([...data,addResponse.data])

        setNewTitle("")
        setNewViews("")
        setNewAccessories("")
        setNewImage("")
    }

    const deleteData = async (id) => {
        let deleteRecord = await axios.delete(`http://localhost:5000/cars/${id}`)
        console.log(id)
        setData(data.filter(item => item.id !== id))
    }

    const editData = async (car) => {
        setEditId(car.id)
        setEditTitle(car.title)
        setEditViews(car.views)
        setEditAccessories(car.accessories)
        setEditImage(car.image)
    }

    const saveEditData = async (id) => {
        const updatedCar = { title: editTitle, views: editViews, accessories: editAccessories, image: editImage};
        await axios.put(`http://localhost:5000/cars/${id}`, updatedCar);
        const updatedData = data.map((car) => (car.id === id ? { ...car, ...updatedCar } : car));
        setData(updatedData);
        setEditId(null);  
    };
    
  return (
    <div className='main'>
        <br /><br /><br />
        <h1>AxiosApi</h1>

        <h3>Enter details about your car</h3>
        <input type="text" value={newTitle} placeholder='Enter Title' onChange={(e) => setNewTitle(e.target.value)} /> <br />
        <input type="number" value={newViews} placeholder='Enter views' onChange={(e) => setNewViews(e.target.value)} /> <br />
        <input type="text" value={newAccessories} placeholder='Enter accessories' onChange={(e) => setNewAccessories(e.target.value)} /> <br />
        <input type="text" value={newImage} placeholder='Enter image URL' onChange={(e) => setNewImage(e.target.value) } />

        <button onClick={addData}>Add Data</button>

        <div className='displayData'>
            {
                data &&
                data.map((e,i) => {
                    return(

                        // <ul key={i}>
                        //     <li>{e.id}</li>
                        //     <li>{e.title}</li>
                        //     <li>{e.views}</li>
                        //     <li>{e.accessories}</li>
                        //     <button onClick={() =>  editData(e.id)}>Edit</button>
                        //     <button onClick={() => deleteData(e.id) }>Delete</button>                       
                        // </ul>

                        <ul key={i}>
                                {/* <li>{}</li> */}

                                {EditId === e.id ? (
                                    <>
                                        <li>
                                            <input type="text" placeholder='Enter Title' value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                                        </li>
                                        <li>
                                            <input type="number" placeholder='Enter Views' value={editViews} onChange={(e) => setEditViews(e.target.value)} />
                                        </li>
                                        <li>
                                            <input type="text" placeholder='Enter Accessories' value={editAccessories} onChange={(e) => setEditAccessories(e.target.value)} />
                                        </li>
                                        <li>
                                            <input type="text" placeholder='Enter URL' value={editImage} onChange={(e) => setEditImage(e.target.value)} />
                                        </li>

                                        <button onClick={() => saveEditData(e.id)}>Save</button>
                                    </>
                                ) : (
                                    <>
                                        <li>{e.title}</li>
                                        <li>{e.views}</li>
                                        <li>{e.accessories && e.accessories}</li>
                                        <button onClick={() => editData(e)}>Edit</button>
                                        <button onClick={() => deleteData(e.id)}>Delete</button> <br /> <br />
                                        <img className='img' src={e.image} alt="" />
                                    </>
                                )}
                        </ul>
                        
                    )
                })
            }
        </div>

    </div>
  )
}
