import { useState } from 'react'
import './App.css'
import EstacionActualComponent from './components/EstacionActualComponent'
import VeranoComponent from './components/VeranoComponent'
import InviernoComponent from './components/InviernoComponent'
import MainLoyouts from './layouts/MainLoyouts'

function App() {

  const [currentStation, setcurrentStation] = useState() // 'VERANO' | 'INVIERNO'
  
  return (
   <>
    <MainLoyouts>
      {
        currentStation === 'VERANO' ? (
          <VeranoComponent />
        ): (
          <InviernoComponent />
        )

      }
    </MainLoyouts>
  
   </>
  )
}

export default App
