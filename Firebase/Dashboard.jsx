
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export default function Dashboard() {
  const [newTask, setNewTask] = useState("")
  const [newPriority, setNewPriority] = useState("")
  const [status, setStatus] = useState("")
  const [editIndex, setEditIndex] = useState(null)

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = () => {
      if (auth.currentUser) {
        const userDocRef = doc(db, 'users', auth.currentUser.uid);

        getDoc(userDocRef)
          .then((userDoc) => {
            if (userDoc.exists()) {
              const data = userDoc.data();
              setTasks(data.tasks || []);
            } else {
              console.log('No such document found in Firestore!');
            }
          })
      }
    };

    fetchTasks();
  }, []);


  //delete
  const handleDelete = (taskIndex) => {
    if (auth.currentUser) {
      const userDocRef = doc(db, 'users', auth.currentUser.uid);

      getDoc(userDocRef)
        .then((userDoc) => {
          if (userDoc.exists()) {
            const data = userDoc.data();
            const updatedTasks = [...(data.tasks || [])];
            updatedTasks.splice(taskIndex, 1); 

            // Update Firestore
            updateDoc(userDocRef, { tasks: updatedTasks })
              .then(() => {
                console.log('Task deleted successfully!');
                setTasks(updatedTasks); 
              })
          }
        })
    }
    setNewTask("")
    setNewPriority("")
    setStatus("")
  };

  // Handle edit
  const handleEdit = (taskIndex) => {
    const taskToEdit = tasks[taskIndex];
    setNewTask(taskToEdit.task); 
    setNewPriority(taskToEdit.priority); 
    setStatus(taskToEdit.status);
    setEditIndex(taskIndex); 
  };

  // Handle task update or add
  const handleSave = () => {
    if (auth.currentUser) {
      const userDocRef = doc(db, 'users', auth.currentUser.uid);

      let updatedTasks = [...tasks];
      if (editIndex !== null) {
        updatedTasks[editIndex] = { task: newTask, priority: newPriority, status: status, };
      } else {
        updatedTasks.push({ task: newTask, priority: newPriority, status: status, });
      }

      // Update Firestore 
      updateDoc(userDocRef, { tasks: updatedTasks })
        .then(() => {
          console.log('Tasks updated successfully!');
          setTasks(updatedTasks); 
          setNewTask("");
          setNewPriority("");
          setStatus("")
          setEditIndex(null); 
        })
    }
  };


  return (
    <div className="main_dash">

      <div className="Dashboard">

      <h1>Welcome to My Dashboard</h1>
      <input type="text" placeholder='Enter new Task' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <input type="text" placeholder='Enter Priority' value={newPriority} onChange={(e) => setNewPriority(e.target.value)} />
      <input type="text" placeholder='Enter status' value={status} onChange={(e) => setStatus(e.target.value)} />
      <button onClick={handleSave}>
        {editIndex !== null ? "Update Task" : "Add New Task"}
      </button>

      <div className="tasks">
        <h2>Your Tasks:</h2>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((taskObj, index) => (
              <li key={index}>
                <p><strong>Task:</strong> {taskObj.task}</p>
                <p><strong>Priority:</strong> {taskObj.priority}</p>
                <p><strong>Status:</strong> {taskObj.status || 'Not provided'}</p> <br />
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks available!</p>
        )}
      </div>
      </div>

    </div>
  );
}
