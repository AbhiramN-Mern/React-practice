import React, { createContext, useState } from 'react'
import Profile from './profile'
 export let userContext=createContext()

function App() {
  let[user,setUser]=useState("Abhiram")
  return (
    <div>
      <userContext.Provider value={{user,setUser}}>
    <Profile/>
      </userContext.Provider>
      

    </div>
  )
}

export default App
