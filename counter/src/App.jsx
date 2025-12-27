import { useState } from "react";
const app=()=>{
    
    let [count,setCount]=useState(0)
    function inc(){
        let out=count+1
        setCount(out)
    }
    function dgc(){
        let out=count-1
        setCount(out)
    }
    return(
        <>
    <h1>count is {count}</h1>
    <button onClick={inc}>inc</button>
    <button onClick={dgc}>dgc</button>
        <input type="number" value={count} onChange={(e)=>{
            setCount(e.target.value)
        }}
         />
</>
    )
}
export default app