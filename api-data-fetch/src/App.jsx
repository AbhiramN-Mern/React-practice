import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [name,setname]=useState([])
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(name=>setname(name))
  
},[])

 return(
  <div>
  <h1>hello</h1>
  {name.map((value)=>(
      <div key={value.id}>
        <h3 className='text-info'>{value.id}:- {value.name}</h3>
      </div>
 ))}   
 </div>
 )
}


export default App
