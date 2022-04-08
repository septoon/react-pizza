import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavMobile.css'
import navBarItems from '../../common/json/navBar'

import { useDispatch, useSelector } from 'react-redux'
import { addNavListAC, toggleIsActiveAC } from '../../redux/nav-reducer'

const NavMobileCopy = () => {
  const link = window.location.href

  const reg = link.match(/[^\/]*$/)[0]

  const dispatch = useDispatch()
  const { navList, isOpen } = useSelector(({ nav }) => ({
    navList: nav.list,
    isOpen: nav.isOpen
  }))

  React.useEffect(() => { 
    dispatch(addNavListAC(navBarItems))
  }, [dispatch])

  const toggleSwitch = () => isOpen ? dispatch(toggleIsActiveAC(false)) : dispatch(toggleIsActiveAC(true))


  return (
    <div className="nav_mobile_wrapper">
      <div className="navigation">
        <ul>
        {
          navList.map(i => (
            <NavLink to={i.navlink} className="list" key={i.id} activeClassName="active">
              <span className="icon">
                <img src={i.src} alt="menu" className="menu_btn"/>
              </span>
              <span className="text">{i.name}</span>
            </NavLink>
          ))
        }
        </ul>
      </div>
    </div>
  )
}

export default NavMobileCopy
