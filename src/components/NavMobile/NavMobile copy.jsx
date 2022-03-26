import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavMobile.css'
import { useSelector } from 'react-redux'
import navBarItems from '../../common/json/navBar'

const NavMobile = () => {  
  const dispatch = useDispatch()
  const { list, isOpen } = useSelector(({ nav }) => ({
    list: nav.list,
    isOpen: nav.isOpen
  }))

  return (
    <div className="nav_mobile_wrapper">
      <div className="navigation">
        <ul>
        {
          list.map(i => (
            <li className={ `/${reg}` ===  i.navlink ? "list active" : "list"} >
            <NavLink to={i.navlink} >
              <span className="icon">
                <img src={i.src} alt="menu" className="menu_btn"/>
              </span>
              <span className="text">{i.name}</span>
            </NavLink>
          </li>
          ))
        }
          <div className="border_top"></div>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  )
}

export default NavMobile
