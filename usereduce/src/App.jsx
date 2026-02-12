import React, { useReducer } from 'react'
  let initialState={Count:0}

  function reducer(state,action){
  switch(action.type){
      case "inc":
        return {Count:state.Count+1}
      case "dgc":
        return {Count:state.Count-1}
      case "reset":
        return {Count:0}
      }
  }

function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <>
    <h1>count is {state.Count}</h1>
    <button onClick={()=>dispatch({type:"inc"})}>+ </button>
    <button onClick={()=>dispatch({type:"dgc"})} >-</button>
    <button onClick={()=>dispatch({type:"reset"})} >reset</button>
    </>
  )
}

export default App
