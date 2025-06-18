import React from 'react'
import { Outlet } from 'react-router'
import MenuComponent from '../components/common/MenuComponent'
const MainLayout = () => {
  return (
    <div>
        <header>
            <h1>Aplicación Fórmula 1</h1>
            <MenuComponent />
        </header>
        <hr />
        <Outlet />
    </div>
  )
}

export default MainLayout