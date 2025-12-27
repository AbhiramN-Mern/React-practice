import React from 'react'
import { Route,Router,Link } from 'react-router-dom'
function Home() {
  return (
    <div>
       <h1>
        <Link to="/about">about</Link>
       </h1>
    </div>
  )
}

export default Home
