import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './css/Header.css'
import './css/Header-media.css'
import NavBar from './NavBar'

import logo from '../../common/img/pizza-logo.png'
import textLogo from '../../common/img/text-logo.png'
import basket from '../../common/img/shopping-cart.svg'


const Header = () => {
    // const screenWidth = window.screen.width

    const { totalCount, totalPrice } = useSelector(({ cart }) => ({
        totalPrice: cart.totalPrice,
        totalCount: cart.totalCount
    }))
    
     return (    
        <div className="header_container">
            <div className='header_wrapper'>            
                <NavLink to='/react-pizza' >
                    <img src={logo} alt="logo" className='logo' />
                </NavLink>
                <img src={textLogo} alt="vivat pizza" className="text_logo" />
                <NavBar />
                <div className='contacts'>
                    <div className='basket' >
                        <div className="total_count">
                            <span>{totalPrice} ₽</span>
                        </div>
                        <span>|</span>
                        <div className="basket_icon">
                            <NavLink to='/cart' >
                                <img src={basket} alt='shopping cart' />
                            </NavLink>
                            <span>{totalCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
