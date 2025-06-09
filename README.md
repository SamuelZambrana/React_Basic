# 🚀 React Basic - Guía del Proyecto

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react) 
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![Vite](https://img.shields.io/badge/Vite-Fast%20Dev-purple?logo=vite)
![Styled Components](https://img.shields.io/badge/Styled%20Components-Modern-blueviolet?logo=styled-components)

Este repositorio **React_Basic** es un proyecto desarrollado con **React** y **Vite**, pensado para crear aplicaciones web modernas con una estructura optimizada y componentes reutilizables. 💻✨

---

## 🔧 Tecnologías Usadas

| Tecnología | Descripción |
|------------|-------------|
| ⚛️ **React** | Biblioteca para interfaces de usuario dinámicas |
| ⚡ **Vite** | Entorno de desarrollo rápido y eficiente |
| 🎨 **Styled Components** | Estilos encapsulados en componentes |
| 🔄 **Context API** | Manejo global del estado sin Redux |
| 📄 **React Router** | Navegación entre páginas sin recargar |
| 🌎 **ES6+** | Últimas características de JavaScript |

---

## 🛠️ React Hooks Usados

### 🏗️ `useState`
El hook `useState` permite manejar estados dentro de los componentes.

Ejemplo:
```jsx
import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
```

### 🔄 `useEffect`
El hook useEffect permite ejecutar efectos secundarios en los componentes, como peticiones a APIs.

Ejemplo:

```jsx
import { useState, useEffect } from "react";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/users")
      .then(res => res.json())
      .then(data => setUsuarios(data));
  }, []);

  return (
    <ul>
      {usuarios.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### 🎭 `props`
Los props permiten pasar datos de un componente padre a uno hijo.

Ejemplo:

```jsx
function Saludo({ nombre }) {
  return <h1>¡Hola, {nombre}!</h1>;
}

function App() {
  return <Saludo nombre="Juan" />;
}
```

🚀 `Instalación y Uso`
```
Clona el repositorio
sh
git clone https://github.com/SamuelZambrana/React_Basic.git
cd React_Basic
```
`Instala las dependencias`
```
sh
npm install
Ejecuta el servidor de desarrollo
sh
npm run dev
Accede en el navegador ➡️ http://localhost:5173
```
🛠️ `Scripts Disponibles`
```
`Comando	Descripción`
npm run dev	Inicia el entorno de desarrollo
npm run build	Genera la versión optimizada para producción
npm run preview	Ejecuta la aplicación construida localmente
```
🤝 `Contribuciones`

¡Tu ayuda es bienvenida! Puedes contribuir mejorando componentes, optimizando rendimiento o agregando nuevas funcionalidades. Para colaborar:

Haz un fork del proyecto 🍴

Crea una nueva rama con tu mejora ✨

Envía un Pull Request 🚀

📜 `Licencia`

Este proyecto está bajo la MIT License. ¡Úsalo libremente y mejora tu experiencia con React! 📝✨

📌 `Creado por Samuel Zambrana | GitHub`
