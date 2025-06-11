import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import FormUserComponet from '../components/FormUserComponet'
import InfoUserComponent from '../components/InfoUserComponent'


function ListUsersPage() {

 const [listaUsers, setListaUsers] = useState([]); // ✅ Inicializa correctamente como un array vacío
  const [userSelected, setUserSelected] = useState(null);
  const [mode, setMode] = useState("CREATE"); // ✅ Modo inicial corregido

  const loadInfoUser = (user) => {
    setUserSelected(user || null);
  };

  const unselectUser = () => {
    setUserSelected(null);
    setMode("LISTADO");
  };

  const createUser = (newUser) => {
    if (!newUser || !newUser.nombre || !newUser.email || !newUser.contraseña) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    setListaUsers((prevUsers) => [...prevUsers, newUser]); // ✅ Agrega usuario correctamente
    setUserSelected(newUser);
    setMode("MODIFY"); // ✅ Cambia al modo modificación tras crear
  };

  const updateUser = (updatedUser) => {
    setListaUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    ); // ✅ Actualiza los datos del usuario
    setUserSelected(updatedUser);
    setMode("MODIFY"); // ✅ Mantiene el modo edición tras actualizar
  };

  const backToListadoMode = () => {
    setMode("LISTADO");
    setUserSelected(null);
  };

  const changeToEditMode = () => {
    setMode("CREATE"); // ✅ Activa el formulario de edición con datos cargados
  };

  useEffect(() => {
    setListaUsers([]); // ✅ Inicialización correcta
  }, []);

  return (
    <div>
      {mode === "CREATE" && <FormUserComponet createUser={createUser} user={userSelected} />} {/* ✅ El formulario se carga correctamente */}

      {mode === "MODIFY" && userSelected ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
          <h1>Información del usuario</h1>
          <InfoUserComponent user={userSelected} />
          <button onClick={changeToEditMode}>Editar</button> {/* ✅ Abre el formulario con datos existentes */}
        </div>
      ) : (
        listaUsers.length > 0 ? (
          listaUsers.map((user, idx) => <InfoUserComponent key={user.id || idx} user={user} />)
        ) : (
          <p>No hay usuarios registrados...</p>
        )
      )}
    </div>
  );
}


export default ListUsersPage
