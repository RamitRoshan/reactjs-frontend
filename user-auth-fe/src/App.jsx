import About from '../../router-dom-practice/src/About'
import Home from '../../router-dom-practice/src/Home'
import Login from '../../router-dom-practice/src/Login'
import './App.css'
import {Link, Route, Routes} from "react-router-dom"
import Register from './components/Register'

function App() { 

  return (
    <div>
      <h2><b>User Auth Frontend -</b> </h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>

      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
