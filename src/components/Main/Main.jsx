import React from 'react'
import pizza from '../../common/img/pizza.png'
import basket from '../../common/img/shopping-cart.svg'
import './Main.css'
import { NavLink } from 'react-router-dom'

const Main = props => {
  return (
    <div className='container'>
      <div className='text'>
        <h1>Делись любовью с помощью пиццы</h1>
      </div>
      <NavLink to='/catalog' >
        <button className="order">
          <img src={basket} alt="basket" className="basket-main"/>
          Заказать онлайн
        </button>
      </NavLink>
      <img src={pizza} alt="pizza" className='pizza-img' />
    </div>
  )
}

export default Main