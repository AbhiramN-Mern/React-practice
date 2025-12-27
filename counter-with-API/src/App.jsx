import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [num,setnum]=useState(0)
  let [users,setname]=useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=>setname(data))
  },[])
  function inc(){
    if(num<8){
    let out=num+1
    setnum(out)    
  }
}
  function dgc(){
    if(num>0){
    let out=num-1
    setnum(out)    
  }
  }
 const even=num%2==0
  return (
    
    <div>
     
        <h1 style={{color:even?"red":"blue"}} >{num}</h1>
      
    
    <button onClick={inc}>inc</button>
    <button onClick={dgc}>dgc</button>
     <div>
            <h1>{users.length > 0 && users[num].name}</h1>
          </div>
    </div>
    
    
  )
  
}

export default App
