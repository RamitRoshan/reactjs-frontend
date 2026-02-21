import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import Notes from './components/Notes'
import NotesList from './components/NotesList'
// import { setUser } from './slices/authSlice'
import './App.css'
import {Link, Route, Routes} from "react-router-dom"
import Register from './components/Register'
import { fetchUser, logout } from './slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Account from './components/Account'
import PrivateRoute from './components/PrivateRoute'

function App() { 

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => {
    return state.auth.isLoggedIn;
  });

  useEffect(() => {
    if(localStorage.getItem('token')){
      dispatch(fetchUser());
    }
  }, []);


  if(localStorage.getItem('token') && !isLoggedIn){
    // return <p>Loading....</p>
    return <p>Loading.... <RestartAltIcon/> </p>
  }

  return (
    <div>

      {/* <h2><b>User Auth Frontend -</b> </h2>
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
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul> */}

      <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      { !isLoggedIn && <Link to="/login">Login</Link>}
      { !isLoggedIn && <Link to="/register">Register</Link>}
      { isLoggedIn && <Link to="/contact">Contact</Link>}
      { isLoggedIn &&  <Link to="/dashboard">Dashboard</Link>}
      { isLoggedIn && <Link to="/account">Account</Link>}
      { isLoggedIn && <Link to="/notes">Notes Form</Link>}
      { isLoggedIn && <Link to="/noteslist">Notes List</Link>}
      { isLoggedIn && <Link to="/login" onClick={() => {
        localStorage.removeItem("token");
        dispatch(logout());
      }}>Logout</Link>}

      </nav>


      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dashboard' element={
          <PrivateRoute>  {/*HOC*/}
            <Dashboard/>
          </PrivateRoute>
        }/>
        <Route path='/account' element={
          <PrivateRoute>
            <Account/>
          </PrivateRoute>
        }/>
        <Route path='/notes' element={
          <PrivateRoute>
            <Notes/>
          </PrivateRoute>
        }/>
        <Route path='/noteslist' element={
          <PrivateRoute>
            <NotesList/>
          </PrivateRoute>
        }/>
        
      </Routes>
    </div>
  )
};

export default App
