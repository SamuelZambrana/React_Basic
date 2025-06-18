import React from 'react'
import { Link } from 'react-router'

const MenuComponent = () => {
  return (
    <div style={{display: 'flex', justifyContent:'space-evenly'}}>
        <Link to={'/'}>Lista</Link>
        <Link to={'/contact'}>Contacto</Link>
    </div>
  )
}

export default MenuComponent