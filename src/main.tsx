import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
// import Home from './pages/Home'
import"./pages/pastalistadeservicos"
import ListaServicos from './pages/pastalistadeservicos'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Home /> */}
<ListaServicos />
  </React.StrictMode>,
)
