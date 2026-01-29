import React, { memo, useState } from 'react'

   const Child=memo(({count})=>{
  
      console.log("count is render")
      return <h1>count is {count}</h1>
    
  })

function App() {
  let [count,setCount]=useState(0)
  let [other,setOther]=useState(0)
  return (
    <div>
      <h1>other is {other}</h1>
      <button onClick={()=>setCount(count+1)}>count</button>
       <button onClick={()=>setOther(other+1)}>other</button>
      <Child count={count}/>
    </div>
  )
}

export default App
