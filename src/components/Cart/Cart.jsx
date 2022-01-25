import React from 'react'
import './Cart.css'
import basket from '../../common/img/shopping-cart-black.svg';
import trash from '../../common/img/trash.svg';
import minus from '../../common/img/minus.svg';
import plus from '../../common/img/plus.svg';
import closeCart from '../../common/img/close-cart.svg';
import back from '../../common/img/back.svg';

const Cart = () => {
  return  (
    <div className="wrapper">
      <div className="content">
        <div className="container container--cart">
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title"> <img src={basket} className="bask svg" alt="basket" /> Корзина</h2>
              <div className="cart__clear">
                <img src={trash} alt="trash" />
                <span>Очистить корзину</span>
              </div>
            </div>
            <div className="content__items">
              <div className="cart__item">
                <div className="cart__item-img">
                  <img className="pizza-block__image"
                    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                    alt="Pizza" />
                </div>
                <div className="cart__item-info">
                  <h3>Сырный цыпленок</h3>
                  <p>тонкое тесто, 26 см.</p>
                </div>
                <div className="cart__item-count">
                  <div className="button button--outline button--circle cart__item-count-minus"> <img src={minus} className="svg minus" alt="minus" /> </div>
                  <b>2</b>
                  <div className="button button--outline button--circle cart__item-count-plus"> <img src={plus} className="svg" alt="plus" /> </div>
                </div>
                <div className="cart__item-price">
                  <b>770 ₽</b>
                </div>
                <div className="cart__item-remove">
                  <div className="button button--outline button--circle"> <img src={closeCart} className="close-cart svg" alt="closeCart" /> </div>
                </div>
              </div>
              <div className="cart__item">
                <div className="cart__item-img">
                  <img className="pizza-block__image"
                    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                    alt="Pizza" />
                </div>
                <div className="cart__item-info">
                  <h3>Сырный цыпленок</h3>
                  <p>тонкое тесто, 26 см.</p>
                </div>
                <div className="cart__item-count">
                  <div className="button button--outline button--circle cart__item-count-minus"> <img src={minus} className="svg minus" alt="minus" /> </div>
                  <b>2</b>
                  <div className="button button--outline button--circle cart__item-count-plus"> <img src={plus} className="svg" alt="plus" /> </div>
                </div>
                <div className="cart__item-price">
                  <b>770 ₽</b>
                </div>
                <div className="cart__item-remove">
                  <div className="button button--outline button--circle"> <img src={closeCart} className="close-cart svg" alt="closeCart" /> </div>
                </div>
              </div>
              <div className="cart__item">
                <div className="cart__item-img">
                  <img className="pizza-block__image"
                    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                    alt="Pizza" />
                </div>
                <div className="cart__item-info">
                  <h3>Сырный цыпленок</h3>
                  <p>тонкое тесто, 26 см.</p>
                </div>
                <div className="cart__item-count">
                  <div className="button button--outline button--circle cart__item-count-minus"> <img src={minus} className="svg minus" alt="minus" /> </div>
                  <b>2</b>
                  <div className="button button--outline button--circle cart__item-count-plus"> <img src={plus} className="svg" alt="plus" /> </div>
                </div>
                <div className="cart__item-price">
                  <b>770 ₽</b>
                </div>
                <div className="cart__item-remove">
                  <div className="button button--outline button--circle"> <img src={closeCart} className="close-cart svg" alt="closeCart" /> </div>
                </div>
              </div>

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
                  <span>Оплатить сейчас</span>
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
