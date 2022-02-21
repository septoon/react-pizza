import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Header.css'
import './css/Header-media.css'

const NavBarMobile = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleSwitch = () => {
      isOpen ? setIsOpen(false) : setIsOpen(true)
  }
  const burger = isOpen ? "burger change" : "burger"
  const barContainer = isOpen ? "navbar_mobile_container bar_active" : "navbar_mobile_container"

  return (
    <div className={barContainer}>
      <div className="navbar_wrapper">
        <div className={burger} onClick={ toggleSwitch }>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div className='navbar_mobile'>
          <NavLink to='/catalog' className='nav_btn_mobile' onClick={ toggleSwitch } >
            <span>Меню</span>
          </NavLink>
          <NavLink to='/teaCard' className='nav_btn_mobile' onClick={ toggleSwitch } >
            <span>Чай</span>
           </NavLink>
          <NavLink to='/aboutUs' className='nav_btn_mobile' onClick={ toggleSwitch } >
            <span>О Нас</span>
           </NavLink>
          <NavLink to='/delivery' className='nav_btn_mobile' onClick={ toggleSwitch } >
            <span>Доставка</span>
           </NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavBarMobile

