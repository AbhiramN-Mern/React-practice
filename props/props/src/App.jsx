import React, { useState } from 'react'
import Login from './login'
function App() {
  const [name,setName]=useState("")

  const dataFromChild=(value)=>{
    setName(value)
  }

  return (
    <div>
      <Login sentData={dataFromChild}/>
      <h2>name is {name}</h2>
    </div>
  )
}

export default App
