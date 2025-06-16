import React from 'react'
import MenuComponent from '../components/common/MenuComponent'

const MainLayout = (props) => {
    const {
        children,
        setMenuOptions
    } = props
  return (
    <div>
      <header>
        <MenuComponent setMenuOptions={setMenuOptions}/>
      </header>
        <hr />
        {children}
    </div>
  )
}

export default MainLayout