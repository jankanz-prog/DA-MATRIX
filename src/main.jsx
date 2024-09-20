import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import PrelimPrac from './PrelimPrac.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
    <PrelimPrac/>
  </StrictMode>,
)
