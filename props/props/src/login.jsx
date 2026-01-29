import React from 'react'

function login({sentData}) {
  const handle=(e)=>{
    sentData(e.target.value)
  }
  return (
    <div>
      <input type="text" placeholder='name' onChange={handle} />
    </div>
  )
}

export default login
