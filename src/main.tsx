import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
// import App from './App'
import './index.css'
import Home from './pages/Home'
import ListaDevs from './pages/ListaDevs'
import ListaServicos from './pages/pastalistadeservicos'
import PerfilUsuario from './pages/PerfilUsuario'
import VisualizarServico from './pages/VisualizarServico'
import CadastroUsuario from './pages/Cadastrousuario'
import CadastroServico from './pages/CadastoServico'
import Login from './pages/Login'

// import Listaservicosbusca from "./pages/pastalistaservicosbusca"
// import ListaServicos  './pages/pastalistadeservicos'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='listaservicos'element={<ListaServicos/>}/>
      <Route path='listadevs'element={ <ListaDevs/> }/>
      <Route path="perfil/:idUsuario" element={<PerfilUsuario/>}/>
      <Route path='VisualiarServico'element={<VisualizarServico/>}/>
      <Route path='Cadastrousuario' element={<CadastroUsuario/>}/>
      <Route path='CadastroServico' element={<CadastroServico/>}/>
      <Route path='Login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  </React.StrictMode>,
)
