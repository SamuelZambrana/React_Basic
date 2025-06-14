import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import CrearRutaPage from './pages/CrearRutaPage'
import InformacionRutaPage from './pages/InformacionRutaPage'
import ContactoRutaPage from './pages/ContactoRutaPage'


function App() {
 

  return (

     <BrowserRouter>
      <Routes>
        <Route path='/' element={<CrearRutaPage /> }/>
        <Route path='/informacion' element={<InformacionRutaPage /> }/>
        <Route path='/contact' element={<ContactoRutaPage /> }/>
      </Routes>
    </BrowserRouter>
  )

}

export default App
