import { useEffect, useState } from 'react'

import './App.css'

function App() {
 useEffect(()=>{
  fetch("http://localhost:3000/studentinfo")
  .then((data) => console.log(data.json().then((res)=>console.log(res))
  
  )
  )
 })

  return (
    <>
    <h1>
      Student Datalist :
    </h1>
    </>
  )
}

export default App
