import React from 'react'

export default function LocalStorage() {
   
    localStorage.setItem("name","Mango")   
    
    let friut = localStorage.getItem("name")
    console.log(friut)

    // localStorage.removeItem("name")

    let obj = {
        fruit : "Kiwi",
        color : "green",
        season : "winter"
    }

    localStorage.setItem("obj",JSON.stringify(obj))

    let fruitobj = JSON.parse(localStorage.getItem("obj"))
    console.log(fruitobj)


  return (
    <div>
        <center><h1>LocalStorage example</h1></center>
    </div>
  )
}
