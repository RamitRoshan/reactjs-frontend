import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './actions/countActions';
import Btn from './Btn';
import ShowCount from './Show';

function App() {
 
  const count = useSelector((state) => {
    return state.count;
  })

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Trainnig</h2>
      <h2>Count - {count} </h2>
      <button onClick={() => {
        dispatch(increment())
      }}>+1</button>

      <Btn/>
      <hr/>
      <ShowCount/>
    </div>
  )
}

export default App
