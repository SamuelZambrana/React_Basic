import { useState } from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout'
import ContactPage from './pages/ContactPage'
import CrearRutaPage from './pages/CrearRutaPage'
import InformacionRutaPage from './pages/InformacionRutaPage'

function App() {

  const [menuOptions, setMenuOptions] = useState('') // 'CONTACT' | 'INFO' | 'CREATE'

  return (
    <>
      <MainLayout setMenuOptions={setMenuOptions}>
        {
          menuOptions === 'CONTACT' ? (
            <ContactPage/>
          ) : menuOptions === 'INFO' ? (
            <InformacionRutaPage />
          ) : (
            <CrearRutaPage/>
          )
        }
      </MainLayout>
    </>
  )
}

export default App
