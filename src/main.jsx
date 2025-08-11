import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './pages/Home.jsx'
import { Layout } from './components/Layout.jsx'
import { RouterApp } from './router/RouterApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
)
