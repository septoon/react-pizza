import React from 'react'
import './Form.css'
import close from '../../../../common/img/close.png'

const Form = () => {
  return (
    <div className="form-wrapper">
    <img src={close} className="close-btn" alt="close" />
      <form className="form">
        <span>Название пиццы</span>
        <span>Количество</span>
        <span>Ваш адрес:</span>
        <input className='input' type='text' />
        <span>Ваш номер:</span>
        <input className='input' type='tel' />
        <button>Отправить</button>
      </form>
    </div>
  )
}

export default Form
