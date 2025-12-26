import './App.css'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Admin from './AdminLogin'
import AdminContacts from "./AdminContacts";
import {Link, Route, Routes} from "react-router-dom"
function App() {
 

  return (
    <div>
      <h2 className='text-red-500 !important'>Contact Portal</h2>
      <ul className='top-nav'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path="/admin/contacts" element={<AdminContacts />} />
      </Routes>
    </div>
  )
}

export default App
