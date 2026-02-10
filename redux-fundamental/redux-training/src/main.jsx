import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import configureStore from "./store/configureStore"
// eslint-disable-next-line no-unused-vars
import { increment, decrement, incrementBy } from './actions/countActions'
import {Provider} from 'react-redux'

const store = configureStore();
// console.log(store);

console.log('state', store.getState())

store.subscribe(() => {
  console.log('state updated', store.getState())
})


// store.dispatch(increment())

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
