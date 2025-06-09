import React from 'react'
import InfoLibroComponent from './components/InfoLibroComponent'
import DondeComprarLibroComponent from './components/DondeComprarLibroComponent'
import ResenyasLibroComponent from './components/ResenyasLibroComponent'
import RecomendacionesComponent from './components/RecomendacionesComponent'

const InfoLibroPage = () => {

    return (
        <div>
            <div>
                <h1>Información del Libro</h1>
            </div>
            <hr />
            <InfoLibroComponent />
            <hr />
            <DondeComprarLibroComponent />
            <hr />
            <ResenyasLibroComponent />
            <hr />
            <RecomendacionesComponent/>
        </div>
    )
}

export default InfoLibroPage