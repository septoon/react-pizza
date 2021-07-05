import React from 'react'
import './Delivery.css'

const DeliveryPage = (props) => {
  return (
    <div className='delivery-main'>
      <div className='delivery-list'>
        <h1>Доставка</h1>
        <table border="0">
        <tbody>
          {props.list.map(i => {
            return(
              <tr>
                <td>{i.city}</td>
                <td>{i.price}</td>
              </tr>
            )
          })}
        </tbody>
        </table>
      </div>
    </div>
  )
}

export default DeliveryPage
