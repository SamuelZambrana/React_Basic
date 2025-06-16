import React from 'react'
import logo from '../../assets/react.svg';

function HeaderComponent() {
  return (
    <div>
       <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#20232a',
        padding: '10px 20px',
        color: 'white'
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          height: '40px'
        }}
      />
      <h1
        style={{
          margin: 0,
          fontSize: '1.8rem'
        }}
      >
        Mi Aplicación React
      </h1>
    </header>
    </div>
  )
}

export default HeaderComponent
