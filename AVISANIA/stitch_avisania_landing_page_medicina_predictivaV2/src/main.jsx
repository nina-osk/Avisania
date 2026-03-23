import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Nosotros from './Nosotros.jsx'
import Proyectos from './Proyectos.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
