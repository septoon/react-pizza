import React from 'react'
import pizza from '../../common/img/pizza.png'
import basket from '../../common/img/shopping-cart.svg'
import './css/Main.css'
import './css/Main-media.css'
import { NavLink } from 'react-router-dom'
import Img from './Img'
import { useDispatch } from 'react-redux'
import { toggleIsActiveAC } from '../../redux/nav-reducer'

const Main = props => {
  const dispatch = useDispatch()

   React.useEffect(() => { 
     dispatch(toggleIsActiveAC(false))
   }, [dispatch])

   const handleClick = (el) => {
     dispatch(toggleIsActiveAC(true))
   }
  return (
    <div className='container main'>
            <div className='text'>
              <h1>Делись любовью с помощью пиццы</h1>
            </div>
            <NavLink to='/catalog' >
              <button className="order" onClick={ () => handleClick() }>
                <img src={basket} alt="basket" className="basket-main"/>
                Заказать онлайн
              </button>
            </NavLink>
            <Img />
            {/* <img src={pizza} alt="pizza" className='pizza-img' /> */}
      </div>
    )
}

export default Main

