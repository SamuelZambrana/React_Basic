import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router'
import ListaCircuitsPage from './pages/ListaCircuitsPage'
import ContactPage from './pages/ContactPage'
import DetalleCircuitPage from './pages/DetalleCircuitPage'
import MainLayout from './layouts/MainLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<MainLayout />} >
          <Route index element={<ListaCircuitsPage />} />
          <Route path='/detalle/:id' element={<DetalleCircuitPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Route>
        

      </Routes>
    </BrowserRouter>
  )
}

export default App
