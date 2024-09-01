// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



import React from 'react'
import Navbar from './component/navbar'
import Sec1 from './component/sec1'
import Sec2 from './component/Sec2'
import Sec3 from './component/Sec3'
import Footer from './component/Footer'
import Sec4 from './component/Sec4'
import Sec5 from './component/Sec5'

export default function App() {
  return (
    <>
      <Navbar/>
      <Sec1/>
      <Sec2/>
      <Sec3/>
      <Sec4/>
      <Sec5/>
      <Footer/>
    </>
  )
}
