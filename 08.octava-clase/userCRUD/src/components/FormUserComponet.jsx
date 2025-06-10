import React, { useState } from 'react'

function FormUserComponent({ createUser }) {
 
  const [newUser, setNewUser] = useState({ nombre: "", contraseña: "", email: "" });

  const newUserHandler = (propName, propValue) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      [propName]: propValue
    }));
  };

  return (
    <div>
      <h1>Crear nuevo usuario</h1>

      <div>
        <span>Username: </span>
        <input type="text" value={newUser.nombre} onChange={(e) => newUserHandler("nombre", e.target.value)} />
      </div>

      <div>
        <span>Password: </span>
        <input type="password" value={newUser.contraseña} onChange={(e) => newUserHandler("contraseña", e.target.value)} />
      </div>

      <div>
        <span>Email: </span>
        <input type="email" value={newUser.email} onChange={(e) => newUserHandler("email", e.target.value)} />
      </div>

      <div>
        <button onClick={() => createUser(newUser)}>Crear</button>
      </div>
    </div>
  );
}

export default FormUserComponent
