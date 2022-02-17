import React, { useRef } from 'react'
import './Form.css'
import emailjs from 'emailjs-com';
import close from '../../../common/img/close.png'

const Form = ({ setIsOrder, items, totalCount, totalPrice }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm('gmail', 'template_34nbq1a', form.current, 'user_bZNkaUPeU8r748slZmiEH')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };
  return (
    <div className="email-form">
      <div className="email-form-wrapper">
        <img src={close} className="close-btn" alt="close" onClick={ () => setIsOrder(false) } />
        <h2>Ваш заказ:</h2>
        <form ref={form} onSubmit={sendEmail} className="form-total">
          {
            items.map(i => (
                <input key={i.id} className="hidden-input" name={i.id} value={`${i.title} | ${i.activeSize} | ${i.activePrice} ₽`} />
              ))
          }
          <input className="hidden-input" name="message" value={`На сумму: ${totalPrice} ₽`} />
          <label>Введите ваш адрес:</label>
          <input name="address" placeholder="ул. Горького, 54" />
          <label>Введите ваш номер телефона:</label>
          <input name="telephone" type="tel" pattern="[0-9]{3}-[0-9]{3}" />
          <button type="submit">Заказать</button>
        </form>
      </div>
    </div>
  )
}

export default Form
