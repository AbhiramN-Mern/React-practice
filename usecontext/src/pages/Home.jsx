import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

function Home() {
    const theme=useContext(ThemeContext)
  return (
      <h1>{theme}mode</h1>
  )
}

export default Home
