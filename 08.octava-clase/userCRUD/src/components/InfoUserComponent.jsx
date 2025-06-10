import React from 'react'

function InfoUserComponent({ user }) { 
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <span style={{ fontWeight: 'bold' }}>Nombre: </span>
        <span>{user?.nombre || "Sin nombre"}</span> 
      </div>
      <div>
        <span style={{ fontWeight: 'bold' }}>Contraseña: </span>
        <span>{user?.contraseña || "Sin contraseña"}</span>
      </div>
      <div>
        <span style={{ fontWeight: 'bold' }}>Email: </span>
        <span>{user?.email || "Sin email"}</span>
      </div>
    </div>
  );
}


export default InfoUserComponent
