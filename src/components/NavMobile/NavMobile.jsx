import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavMobile.css'
import { useSelector } from 'react-redux'
import navBarItems from '../../common/json/navBar'

const NavMobile = () => {  
  const [ menu, tea, info, delivery, cart ] = navBarItems

  const id = window.location.href

  const reg = id.match(/[^\/]*$/)[0]

  console.log(`/${reg}`)
  console.log(info.navlink)
  console.log(cart.navlink)
  // console.log(window.location.href)
  return (
    <div className="nav_mobile_wrapper">
      <div className="navigation">
        <ul>
          <li className={ `/${reg}` ===  menu.navlink ? "list active" : "list"} >

          
            <NavLink to={menu.navlink} >
              <span className="icon">
                <img src={menu.src} alt="menu" className="menu_btn"/>
              </span>
              <span className="text">{menu.name}</span>
            </NavLink>
          </li>
          <li className={ `/${reg}` ===  tea.navlink ? "list active" : "list"}>
          
          
            <NavLink to={tea.navlink} >
              <span className="icon">
                <img src={tea.src} alt="menu" className="menu_btn"/>
              </span>
              <span className="text">{tea.name}</span>
            </NavLink>
          </li>
          <li className={ `/${reg}` ===  info.navlink ? "list active" : "list"} >
          
            <NavLink to={info.navlink} >
              <span className="icon">
                <img src={info.src} alt="menu" className="menu_btn"/>
              </span>
              <span className="text">{info.name}</span>
            </NavLink>
          </li>
          <li className={ `/${reg}` ===  delivery.navlink ? "list active" : "list"}>
          
            <NavLink to={delivery.navlink} >
              <span className="icon">
                <img src={delivery.src} alt="menu" className="menu_btn"/>
              </span>
              <span className="text">{delivery.name}</span>
            </NavLink>
          </li>
          <li className={ `/${reg}` ===  cart.navlink ? "list active" : "list"}>
          
            <NavLink to={cart.navlink} >
              <span className="icon">
                <img src={cart.src} alt="menu" className="menu_btn"/>
              </span>
              <span className="text">{cart.name}</span>
            </NavLink>
          </li>
          <div className="border_top"></div>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  )
}

export default NavMobile
