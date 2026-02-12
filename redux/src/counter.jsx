  import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { degrement, increment, reset } from './features/CounterSlice'
  
  function Counter() {
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(degrement())}>-</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
      </div>
    )
  }
  
  export default Counter
  