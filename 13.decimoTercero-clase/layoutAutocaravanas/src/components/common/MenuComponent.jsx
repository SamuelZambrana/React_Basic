import React from 'react'

const MenuComponent = (props) => {
    const {
        setMenuOptions
    } = props
  return (
    <div>
        <button onClick={() => setMenuOptions('CREATE')}>Crear ruta</button>
        <button onClick={() => setMenuOptions('INFO')}>Información de ruta</button>
        <button onClick={() => setMenuOptions('CONTACT')}>Contacto</button>
    </div>
  )
}

export default MenuComponent