import React from 'react'
import { useEffect,useState } from 'react'

function App() {
  let [num,setNum]=useState(0)
  let [run,setRun]=useState(false)
  useEffect(()=>{
    
    let intervell
    if(run){
    intervell=setInterval(()=>{
        setNum(value=>value+1)
      },1000)
    }
    return()=> clearInterval(intervell)
  },[run])
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>setRun(false )}
      >stop</button>
      <button onClick={()=>setRun(true)} >start</button>
      <button onClick={()=>setNum(0)} >reboot</button>
    </div>
  )
}

export default App
