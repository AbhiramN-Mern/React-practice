import React from 'react'

function reducer(state,action){
  switch(action.type){
    case "INC":
      return {Count:state.Count+1}
    case "DEC":
      return {Count:state.Count-1}
      default:
        return State
  }
}
let initialState={Count:0}

function App() {

  const [state,dispatch]=React.useReducer(reducer,initialState)
  return (
    <div>
      <p>{state.Count}</p>
      <button onClick={()=>dispatch({type:"INC"})}>+</button>
      <button onClick={()=>dispatch({type:"DEC"})}>-</button>
    </div>
  )
}

export default App
