import React, { useContext } from 'react'
import { userContext } from './App'

function Profile() {
    let {user,setUser}=useContext(userContext)
    const omg=()=>{
       setUser("check")
    }

  return (
    <div>
      <h1>{user}</h1>
      {/* <h1>{user.role}</h1> */}
      <button onClick={omg}>click me</button>
    </div>
  )
}

export default Profile
