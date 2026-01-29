import React, { useState } from 'react'
import Login from './login'
function App() {
  const [name,setName]=useState("")

  

  return (
    <div>
      <Login sentData={setName}/>
      <h2>name is {name}</h2>
    </div>
  )
}

export default App

