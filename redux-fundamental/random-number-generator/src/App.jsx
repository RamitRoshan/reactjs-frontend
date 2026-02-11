import './App.css'
import {Link, Route} from 'react-router-dom'
import UsersList from './components/Users/UsersList'
import NumbersContainer from './components/NumbersApp/NumbersContainer'

// eslint-disable-next-line no-unused-vars
function App(props) {
  

  return (
    <div>
      <h2>Random Number Generator</h2>
      <NumbersContainer/>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>

      {/* <Route path='/' component={Home} exact={true}/> */}
      <Route path="/users" component={UsersList} exact={true}/>
    </div>
  )
}

export default App
