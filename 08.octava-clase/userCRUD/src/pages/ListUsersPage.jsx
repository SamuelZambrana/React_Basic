import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import FormUserComponet from '../components/FormUserComponet'
import InfoUserComponent from '../components/InfoUserComponent'


function ListUsersPage() {

 const [listaUsers, setListaUsers] = useState([]); 
  const [userSelected, setUserSelected] = useState(null);
  const [mode, setMode] = useState("CREATE"); // Valores posibles de mode: 'LISTADO' | 'CREATE' | 'MODIFY'

  const loadInfoUser = (user) => {
    setUserSelected(user || null); 
  };

  const unselectUser = () => {
    setUserSelected(null);
    setMode("LISTADO")
  };

  const createUser = (newUser) => {
    if (!newUser || !newUser.nombre || !newUser.email || !newUser.contraseña) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    setListaUsers((prevUsers) => [...prevUsers, newUser]); 
    setUserSelected(newUser); 
    setMode("MODIFY"); 
  };

  const backToListadoMode = () => {
    setMode("LISTADO");
  };

  useEffect(() => {
    setListaUsers([]); 
  }, []);

  return (
    <div>
      {mode === "CREATE" && <FormUserComponet createUser={createUser} />}

      {mode === "MODIFY" && userSelected ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
          <h1>Informacion del usuario</h1>
          <InfoUserComponent user={userSelected} />
          <button onClick={() => setMode("CREATE")}>Editar</button> 
        </div>
      ) : (
        <p>No hay usuarios registrados...</p>
        ) 
      }

    </div>
  );
}

export default ListUsersPage
