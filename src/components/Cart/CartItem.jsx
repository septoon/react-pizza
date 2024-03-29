import React from 'react'

import minus from '../../common/img/minus.svg';
import plus from '../../common/img/plus.svg';
import closeCart from '../../common/img/close-cart.svg';

const CartItem = ({ id, image, title, activeSize, activePrice, price, count, onClickRemovePizza, result }) => {
  
  result.forEach(item => price += parseInt(item.activePrice) + 40)
  const onRemovePizza = () => {
    const pizzaObj = {
      "pizzaId": id,
      "pizzaSize": activeSize
    }
    onClickRemovePizza(pizzaObj)
  }

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image"
          src={image}
          alt={title} />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>{activeSize}</p>
      </div>
      <div className="cart__item-count">
        <div className="button button--outline button--circle cart__item-count-minus"> 
        <img src={minus} className="svg minus" alt="minus" />
      </div>
      <b>{count}шт.</b>
      <div className="button button--outline button--circle cart__item-count-plus"> 
        <img src={plus} className="svg" alt="plus" />
      </div>
    </div>
    <div className="cart__item-price">
      <b>{price}₽</b>
    </div>
    <div className="cart__item-remove">
      <div className="button button--outline button--circle" onClick={onRemovePizza}> 
        <img src={closeCart} className="close-cart svg" alt="closeCart" /> 
      </div>
    </div>
  </div>
  )
}

export default CartItem
