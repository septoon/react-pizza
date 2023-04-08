import React from 'react'
import pizza from '../../common/img/pizza.png'
import basket from '../../common/img/shopping-cart.svg'
import './css/Main.css'
import './css/Main-media.css'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleIsActiveAC } from '../../redux/nav-reducer'
import { initializedSuccess } from '../../redux/app-reducer'
import Loader from '../Loader/Loader'

const Main = props => {
  const dispatch = useDispatch()

  const { initialized } = useSelector(({ app }) => ({
    initialized: app.initialized
  }))

  React.useEffect(() => { 
    dispatch(initializedSuccess(true))
    dispatch(toggleIsActiveAC(false))
  }, [dispatch])

  const handleClick = (el) => {
    dispatch(toggleIsActiveAC(true))
  }
  return (
    <div className='container main'>
      {!initialized ?
        (
          <Loader />
        ) :
        (
          <>
            <div className='text'>
              <h1>Делись любовью с помощью пиццы</h1>
            </div>
            <NavLink to='/catalog' >
              <button className="order" onClick={ () => handleClick() }>
                <img src={basket} alt="basket" className="basket-main"/>
                Заказать онлайн
              </button>
            </NavLink>
            <img src={pizza} alt="pizza" className='pizza-img' />
          </>
        )
      }
      </div>
    )
}

export default Main

