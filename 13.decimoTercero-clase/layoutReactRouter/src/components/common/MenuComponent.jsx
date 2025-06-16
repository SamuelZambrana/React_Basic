import React from 'react'
import { Link } from 'react-router'

function MenuComponent() {
  return (
     <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 50}}>
        <Link to={'/'}>Home Page</Link>
        <Link to={'/contact'}>Contact Page</Link>
    </div>
  )
}

export default MenuComponent
