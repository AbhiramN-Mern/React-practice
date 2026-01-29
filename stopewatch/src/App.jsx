import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  let [time,setTime]=useState(0)
  let [val,setVal]=useState(false)

  useEffect(()=>{
     let interval
   if(val){
      interval=setInterval(()=>{
        setTime(value=>{
          if(value<=0){
            setVal(false)
            return value
          }
          return value-1
        })
         
      },1000)
      
   }
  
   return ()=>clearInterval(interval)
  },[val])
  
  
  return (
    <div>
      <h1>{time}</h1>
      <input onChange={(e)=>setTime(e.target.value)} type="number" />
      <button onClick={()=>setVal(true)}>start</button>
      <button onClick={()=>setVal(false)}>stop</button>
      <button onClick={()=>setTime(0)}>rest</button>
    </div>
  )
}

export default App
