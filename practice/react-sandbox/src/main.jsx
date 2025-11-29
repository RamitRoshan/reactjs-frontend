import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import UserSearch from './UserSearch.jsx'   // updated

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <UserSearch/>
  </StrictMode>
)

