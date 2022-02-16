import React from 'react'
import './Cart.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import basket from '../../common/img/shopping-cart-black.svg';
import trash from '../../common/img/trash.svg';
// import minus from '../../common/img/minus.svg';
// import plus from '../../common/img/plus.svg';
// import closeCart from '../../common/img/close-cart.svg';
import back from '../../common/img/back.svg';

const Cart = () => {
  const items = useSelector(({ cart }) => ({
    items: cart.items
  }))

    console.log(items.items.length)

  return  (
    <div className="wrapper">
      <div className="content">
        <div className="container container--cart">
          <div className="cart"> {/* if items === true */}
            <div className="cart__top">
              <h2 className="content__title"> <img src={basket} className="bask svg" alt="basket" /> Корзина</h2>
              <div className="cart__clear">
                <img src={trash} alt="trash" />
                <span>Очистить корзину</span>
              </div>
            </div>
            <div className="content__items">

            {/* {
              items.items.map(i => (
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
                    <b>2</b>
                    <div className="button button--outline button--circle cart__item-count-plus"> <img src={plus} className="svg" alt="plus" /> </div>
                  </div>
                  <div className="cart__item-price">
                    <b>{i.activePrice}</b>
                  </div>
                  <div className="cart__item-remove">
                    <div className="button button--outline button--circle"> <img src={closeCart} className="close-cart svg" alt="closeCart" /> </div>
                  </div>
                </div>
              ))
            } */}

            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span> Всего пицц: <b>3 шт.</b> </span>
                <span> Сумма заказа: <b>900 ₽</b> </span>
              </div>
              <div className="cart__bottom-buttons">
                <a href="/" className="button button--outline button--add go-back-btn">
                  <img src={back} className="svg back" alt="back" />
                  <span>Вернуться назад</span>
                </a>
                <div className="button pay-btn">
                  <NavLink to='/order'>
                    <span>Оплатить сейчас</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart


// {
//   items.map(i => (
//     <div className="cart__item">
//       <div className="cart__item-img">
//         <img className="pizza-block__image"
//           src={i.image}
//           alt={i.title} />
//       </div>
//       <div className="cart__item-info">
//         <h3>{i.title}</h3>
//         <p>{i.size}</p>
//       </div>
//       <div className="cart__item-count">
//         <div className="button button--outline button--circle cart__item-count-minus"> <img src={minus} className="svg minus" alt="minus" /> </div>
//         <b>2</b>
//         <div className="button button--outline button--circle cart__item-count-plus"> <img src={plus} className="svg" alt="plus" /> </div>
//       </div>
//       <div className="cart__item-price">
//         <b>{i.price}</b>
//       </div>
//       <div className="cart__item-remove">
//         <div className="button button--outline button--circle"> <img src={closeCart} className="close-cart svg" alt="closeCart" /> </div>
//       </div>
//     </div>
//   ))
// }