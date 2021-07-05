import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/catalog' className='nav_btn' >Меню</NavLink>
      <NavLink to='/teaCard' className='nav_btn' >Чайная карта</NavLink>
      <NavLink to='/aboutUs' className='nav_btn' >О Нас</NavLink>
      <NavLink to='/delivery' className='nav_btn' >Доставка</NavLink>
    </div>
  )
}

export default NavBar
