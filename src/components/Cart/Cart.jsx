import React from 'react'
import './Cart.css'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import basket from '../../common/img/shopping-cart-black.svg';
import trash from '../../common/img/trash.svg';
import back from '../../common/img/back.svg';
import emptyCart from '../../common/img/empty-cart.svg';
import { clearPizzaCartAC, removePizzaAC } from '../../redux/cart-reducer';
import CartItem from './CartItem';
import Form from './Form/Form';

const Cart = () => {
  const dispatch = useDispatch()

  const { items, totalCount, totalPrice } = useSelector(({ cart }) => ({
    items: cart.items,
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount
  }))

  const [isOrder, setIsOrder] = React.useState(false)

  const onClickRemovePizza = (pizzaId) => {
    dispatch(removePizzaAC(pizzaId))
  }
  const onClickClearCart = () => {
    dispatch(clearPizzaCartAC())
  }

  return  (
    <div className="wrapper">
      <div className="content">
        { isOrder && (<Form setIsOrder={setIsOrder} 
                            onClickClearCart={onClickClearCart}
                            items={items} 
                            totalCount={totalCount} 
                            totalPrice={totalPrice} />) }
        <div className="container container--cart">
          <div className="cart">
            {
              items.length ?
              ( // Если в корзине что-то есть
                <>
                  <div className="cart__top">
                    <h2 className="content__title"> <img src={basket} className="bask svg" alt="basket" /> Корзина</h2>
                    <div className="cart__clear" onClick={() => {
                      let popup = window.confirm("Вы уверены, что хотите очистить корзину?") 
                      if (popup === true) dispatch(clearPizzaCartAC())
                    } }>
                      <img src={trash} alt="trash" />
                      <span>Очистить корзину</span>
                    </div>
                  </div>
                  <div className="content__items">

                  {items.map(item => (
                    <CartItem  key={item.id} onClickRemovePizza={onClickRemovePizza} {...item} />
                  ))}

                  </div>
                  <div className="cart__bottom">
                    <div className="cart__bottom-details">
                      <span> Всего пицц: <b>{totalCount} шт.</b> </span>
                      <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
                    </div>
                    <div className="cart__bottom-buttons">
                      <NavLink to='/catalog'>
                        <img src={back} className="svg back" alt="back" />
                        <span>Вернуться назад</span>
                      </NavLink>
                      <div className="button pay-btn">
                        <button className="btn-order" onClick={ () => setIsOrder(true) } >Оплатить сейчас</button>
                      </div>
                    </div>
                  </div>
                </>
              ) :
              ( // Если корзина пустая
                <div className="empty_cart">
                  <h2>Корзина пустая</h2>
                  <p>Вероятней всего, вы не заказывали ещё пиццу.
                     Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                     <img src={emptyCart} alt="empty-cart-logo" className="empty-cart-logo" />
                     <NavLink to='/catalog'>
                        <button>Вернуться назад</button>
                     </NavLink>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
