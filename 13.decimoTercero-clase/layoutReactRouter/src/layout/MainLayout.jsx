import React from 'react'
import MenuComponent from '../components/common/MenuComponent'
import { Outlet } from 'react-router'
import HeaderComponent from '../components/common/HeaderComponent'
import FooterComponent from '../components/common/FooterComponent'

function MainLayout() {
  return (
    <div>
      <HeaderComponent />
        <hr />
      <MenuComponent />
        <hr />
      <Outlet />
        <hr />
      <FooterComponent />
    </div>
  )
}

export default MainLayout
