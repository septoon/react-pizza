import React from 'react'
import './Header.css'
import logo from '../../common/img/logo.png'
import basket from '../../common/img/shopping-cart.svg'
import { connect } from 'react-redux'
// import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (    
        <div className='header_wrapper'>
            <img src={logo} alt="logo" className='logo' />
            <div className='contacts'>
               <div className='basket' >
                   <div className="total_count">
                        <span>{props.totalPrice} ₽</span>
                   </div>
                   <div className="baket_icon">
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
