import { createRoot } from 'react-dom/client'
import './index.css'
import store from './store/configureStore.jsx'
import {Provider} from "react-redux"
import App from './App.jsx'

//read the state value from redux store
console.log(store.getState());

createRoot(document.getElementById('root')).render(

  //app is now child of Provider component
  <Provider store={store}>
    <App />
  </Provider>,
)
