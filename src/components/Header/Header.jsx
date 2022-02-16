import React from 'react'
import { useSelector } from 'react-redux'
import './Header.css'
import logo from '../../common/img/pizza-logo.png'
import basket from '../../common/img/shopping-cart.svg'
import NavBar from '../NavBar/NavBar'
import { NavLink } from 'react-router-dom'


const Header = () => {

    const { totalCount, totalPrice } = useSelector(({ cart }) => ({
        totalPrice: cart.totalPrice,
        totalCount: cart.totalCount
    }))

    console.log(totalCount)
  
    // const items = useSelector(({ cart }) => ({
    //     items: cart.items
    // }))

    // const totalCount = useSelector(({ cart }) => ({
    //     totalCount: cart.totalCount
    // }))

    
    // const item = items.items

    
    
    // const totalPrice = item.reduce((a, b) => a + parseInt(b.activePrice), 0)

    return (    
        <div className='header_wrapper'>
            <NavLink to='/react-pizza' >
                <img src={logo} alt="logo" className='logo' />
            </NavLink>
            <NavBar />
            <div className='contacts'>
               <div className='basket' >
                   <div className="total_count">
                        <span>{totalPrice} ₽</span>
                   </div>
                   <div className="basket_icon">
                    <NavLink to='/cart' >
                        <img src={basket} alt='shopping cart' />
                    </NavLink>
                    <span>{totalCount}</span>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Header
