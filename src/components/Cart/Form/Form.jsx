import React, { useRef, useState } from 'react'
import './Form.css'
import emailjs from 'emailjs-com';
import close from '../../../common/img/close.png'
import mask from '../../../common/other/mask';
// import ReactInputMask from 'react-input-mask';

const Form = ({ setIsOrder, items, countById, totalItems, onClickClearCart, totalPrice }) => {
  const form = useRef()
  const inputTel = useRef()

  const [address, setAddress] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  const [value, setValue] = useState('');
   
   function changeValue(e) {
      setValue(e.target.value);
   }

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneNumChange = (event) => {
    setPhoneNum(event.target.value);
  }

  const sendEmail = (e) => {
    e.preventDefault()

  emailjs.sendForm('gmail', 'template_u0d7yw8', form.current, 'ekXJl3cQ3snFLGpWZ')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    })
  }

  React.useEffect(() => {
    mask(inputTel)
  }, [])

  return (
    <div className="email-form">
      <div className="email-form-wrapper">
        <img src={close} className="close-btn" alt="close" onClick={ () => setIsOrder(false) } />
        <h2 className="form-title">Ваш заказ:</h2>
        <form ref={form} onSubmit={sendEmail} className="form-total">
          <div className="order_list_wrapper">
          {
            items.map(i => {
              const count = countById(totalItems, i.id, i.activeSize)
              return (
                <input key={i.id} className="hidden-input" name={i.id} value={`${i.title} | ${i.activeSize} | ${i.activePrice} ₽ | x ${count}шт.`} />
              )
            })
          }
          </div>
          <div className="order_inputs_wrapper">
            <input className="hidden-input" type="text" name="message" value={`На сумму: ${totalPrice} ₽`} />
            <label>Введите ваш адрес:</label>
            <div className="inp_valid">
              <input required
                  className="order_input"
                  onChange={handleAddressChange}
                  name="address"
                  placeholder="ул. Горького, 54" />
              { !address && <p>Поле не заполнено</p> } 
            </div>
            <label>Введите ваш номер телефона:</label>
            <div className="inp_valid">
              <input required
                    className="order_input"
                    onChange={handlePhoneNumChange}
                    ref={inputTel}
                    placeholder="+7 (978) 704 88 06"
                    name="telephone" type="tel" />
              { !phoneNum && <p>Поле не заполнено</p> } 
            </div>
            <label>Спооб оплаты:</label>
            <div className="payment" name="checkbox">
              <div className="payment_method">
                <input  type="radio" onChange={changeValue} value="Наличные" name='cash' id="cash" checked={value === 'Наличные' ? true : false}/> <label className="label_pay" for="cash">Наличные</label>
              </div>
              <div className="payment_method">
                <input  type="radio" onChange={changeValue} value="Карта" name='cart' id="cart" checked={value === 'Карта' ? true : false}/> <label className="label_pay" for="cart">Карта</label>
              </div>
            </div> 
          </div>
          <button type="submit" disabled={!address} className="btn-order" onClick={ () => {
            setTimeout( () => {
              onClickClearCart()
              setIsOrder(false)
            }, 500)
          } }>Отправить</button>
        </form>
      </div>
    </div>
  )
}

export default Form
