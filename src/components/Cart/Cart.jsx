import React from 'react'
import './Cart.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import basket from '../../common/img/shopping-cart-black.svg';
import trash from '../../common/img/trash.svg';
import minus from '../../common/img/minus.svg';
import plus from '../../common/img/plus.svg';
import closeCart from '../../common/img/close-cart.svg';
import back from '../../common/img/back.svg';
import emptyCart from '../../common/img/empty-cart.svg';

const Cart = () => {
  const { items, totalCount, totalPrice } = useSelector(({ cart }) => ({
    items: cart.items,
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount
  }))

  return  (
    <div className="wrapper">
      <div className="content">
        <div className="container container--cart">
          <div className="cart">
            {
              items.length ?
              ( // Если в корзине что-то есть
                <>
                <div className="cart__top">
                    <h2 className="content__title"> <img src={basket} className="bask svg" alt="basket" /> Корзина</h2>
                    <div className="cart__clear">
                      <img src={trash} alt="trash" />
                      <span>Очистить корзину</span>
                    </div>
                  </div><div className="content__items">
                      {items.map(i => (
                        <div className="cart__item" key={i.id}>
                          <div className="cart__item-img">
                            <img className="pizza-block__image"
                              src={i.image}
                              alt={i.title} />
                          </div>
                          <div className="cart__item-info">
                            <h3>{i.title}</h3>
                            <p>{i.activeSize}</p>
                          </div>
                          <div className="cart__item-count">
                            <div className="button button--outline button--circle cart__item-count-minus"> <img src={minus} className="svg minus" alt="minus" /> </div>
                            <b>1</b>
                            <div className="button button--outline button--circle cart__item-count-plus"> <img src={plus} className="svg" alt="plus" /> </div>
                          </div>
                          <div className="cart__item-price">
                            <b>{i.activePrice}</b>
                          </div>
                          <div className="cart__item-remove">
                            <div className="button button--outline button--circle"> <img src={closeCart} className="close-cart svg" alt="closeCart" /> </div>
                          </div>
                        </div>
                      ))}
                    </div><div className="cart__bottom">
                      <div className="cart__bottom-details">
                        <span> Всего пицц: <b>{totalCount} шт.</b> </span>
                        <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
                      </div>
                      <div className="cart__bottom-buttons">
                        <NavLink to='/catalog'>
                          <a href="/" className="button button--outline button--add go-back-btn">
                            <img src={back} className="svg back" alt="back" />
                              <span>Вернуться назад</span>
                          </a>
                        </NavLink>
                        <div className="button pay-btn">
                          <NavLink to='/order'>
                            <span>Оплатить сейчас</span>
                          </NavLink>
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
                     <img src={emptyCart} alt="empty-cart-logo" />
                     <NavLink to='/catalog'>
                        <a href="/" className="button button--outline button--add go-back-btn">
                          <img src={back} className="svg back" alt="back" />
                            <span>Вернуться назад</span>
                        </a>
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
