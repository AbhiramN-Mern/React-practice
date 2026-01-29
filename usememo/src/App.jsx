import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

function App() {
  let[counter1,setCounter1]=useState(0)
  let[counter2,setCounter2]=useState(0)

  function handle1(){
    console.log("handle 1 is render");
    setCounter1(counter1+1)
  }

   function handle2(){
    console.log("handle 2 is render");
    setCounter1(counter2+1)
  }

  const isEven=useMemo(()=>{
    for(let i=0;i<100;i++){
    }
      if(counter1%2==0){
        return true
      }else{
        return false
      }
  },[counter1])


  return (
    <div>
      <button onClick={()=>handle1()}>counter 1</button>
      <h1>counter is {isEven? "even":"odd"}</h1>
      <button onClick={()=>handle2()}>counter 2</button>

    </div>
  )
}

export default App
