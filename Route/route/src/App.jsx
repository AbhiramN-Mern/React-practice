  import { Routes,Route,Navigate, Link } from 'react-router-dom'
  import './App.css'
  import About from './compontent/about'
  import Pay from './compontent/pay'
  import Home from './compontent/home'
  function App() {

    return (
    <div>
      

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
         <Route path='/pay' element={<Pay/>} />

      </Routes>

    </div>
    )
  }

  export default App
