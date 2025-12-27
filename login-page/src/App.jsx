import { useState,useRef } from "react";

function App(){
  const [value,setValue]=useState('')
  const inputref=useRef(null)

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!value.trim()){
      console.log("please entter input is empty");
      inputref.current.focus()
      return 
    }
    console.log(value);
    setValue('')
    inputref.current.focus()
  }
  return(
    <div>
    <h1>Login Page</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputref} value={value} onChange={(e)=>setValue(e.target.value)} />
    <button type="submit">submit</button>
    </form>
    </div>
  )
}
export default App