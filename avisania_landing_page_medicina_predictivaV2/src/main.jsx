import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Proyectos from './Proyectos.jsx'
import QuienesSomos from './QuienesSomos.jsx'
import './index.css'

const rootElement = document.getElementById('root')
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app)
} else {
  ReactDOM.createRoot(rootElement).render(app)
}
