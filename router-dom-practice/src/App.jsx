import './App.css'
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Services from "./Services"
import Login from "./Login"
import UserList from './UserList'
import {Link, Route, Routes} from "react-router-dom";

function App() {
 

  return (
    <>
    <h1>React Router Dom</h1>
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
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/userlist">view users</Link>
      </li>
    </ul>
 

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userlist" element={<UserList />} />
    </Routes>
  
    </>
  )
}

export default App


// import "./styles.css";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Services from "./Services";
// import Login from "./Login";
// import { Link, Routes, Route } from "react-router-dom";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>

//       <ul className="top-nav">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/services">Services</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//       </ul>
 

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </div>
//   );
// }
