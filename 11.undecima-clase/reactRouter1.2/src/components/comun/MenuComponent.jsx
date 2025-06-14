import React from 'react'
import { Link } from "react-router";

function MenuComponent() {
  return (
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/login'}>Login</Link>
    </div>
  )
}

export default MenuComponent
