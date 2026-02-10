import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx' 
import configureStore from "./store/configureStore.jsx"
import { Provider } from 'react-redux'


const store = configureStore(); 

console.log('state', store.getState())

store.subscribe(() => {
  console.log('state updated', store.getState())
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
