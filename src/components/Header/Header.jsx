import React from 'react'
import './Header.css'
import logo from '../../common/img/pizza-logo.svg'
import basket from '../../common/img/shopping-cart.svg'
import { connect } from 'react-redux'
import NavBar from '../NavBar/NavBar'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (    
        <div className='header_wrapper'>
            <NavLink to='/react-pizza' >
                <img src={logo} alt="logo" className='logo' />
            </NavLink>
            <NavBar />
            <div className='contacts'>
               <div className='basket' >
                   <div className="total_count">
                        <span>{props.totalPrice} ₽</span>
                   </div>
                   <div className="basket_icon">
                    <img src={basket} alt='shopping cart' />
                   </div>
               </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    totalPrice: state.priceCount.priceCounter
})

export default connect (mapStateToProps, {}) (Header)
