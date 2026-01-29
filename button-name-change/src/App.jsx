import React, { useState } from 'react'

function App() {
  let [name,setName]=useState("hai")
  let [val,setVal]=useState(false)
  function test(){
   setName(val?"hello":"hai")
   setVal(!val)
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={test}>click me</button>
    </div>
  )
}

export default App
