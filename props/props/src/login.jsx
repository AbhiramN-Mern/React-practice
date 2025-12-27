import React from 'react'

function login({sentData}) {
  return (
    <div>
      <input type="text" placeholder='type you name' onChange={(e)=>sentData(e.target.value)} />
    </div>
  )
}

export default login
