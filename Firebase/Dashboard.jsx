import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export default function Dashboard() {

  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    let subscribe = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser) {
        setUser(currentUser)
      }
    })
    return () => subscribe();
  },[])

  useEffect(() => {
    if(user) {
     fetchUser()    
    }
  },[user])

  // const fetchUser = () => {
  //   console.log(user.uid);
  //   getDoc(doc (db, "users", user.uid) ) 
  //   .then(data => {
  //     console.log(data.data())
  //   })
    
  // }

  const fetchUser = async () => {
    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserName(docSnap.data()); 
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className='SignUp' style={{background: ''}}>
        <h1>Welcome to my Home Page</h1>
        {userName && (
          <>
            <h3 className="typewriter">
              <p>Hello, {userName.name}!</p>
            </h3>
            <img style={{marginTop:'-100px'}} src="https://i.pinimg.com/originals/d3/7e/cf/d37ecf1402355fa3bf9fc70a45e3e379.gif" alt="" /> 
            </>
      )}

    </div>
  )
}
