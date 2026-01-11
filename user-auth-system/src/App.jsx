import './App.css'
import {Link, Routes, Route} from "react-router-dom";
import Login from './components/Login';

function App() {

  return (
    <div>
      <h1>User Authentication System</h1>

      <nav>
        <ul>
          <li>Login</li>
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </nav>
    </div>
  )
}

export default App
