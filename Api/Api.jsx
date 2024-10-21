import React, { useEffect, useState } from 'react'

export default function Api() {

    const [data, setData] = useState();

    useEffect(() => {
        FetchApi();
    },[])

    const FetchApi = async () => {
        const responce = await fetch("https://fakestoreapi.com/users")
        console.log(responce);

        const res = await responce.json();
        console.log(res);
        setData(res)
    }

  return (
    <div>
        <h1>Api</h1>

        {
            data && 
            data.map((e,i) => {

               return (
                <ul key={i}>
                    <li>{e.id}</li>
                    <li>{e.email}</li>
                    <li>{e.username}</li>
                    <li>{e.password}</li>
                </ul>
               )

            })
        }
    </div>
  )
}
