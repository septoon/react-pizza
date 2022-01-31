import React from 'react'
import './Delivery.css'
import {useSelector, useDispatch} from 'react-redux';

import { deliveryList } from '../../common/json/delivery-list'
import { addDeliveryList } from '../../redux/delivery-reducer'

const DeliveryPage = (props) => {
  const dispatch = useDispatch()
  const { list } = useSelector(({ deliveryPage}) => ({
    list: deliveryPage.deliveryListData
  }))

  React.useEffect(() => { 
    dispatch(addDeliveryList(deliveryList))
  }, [])

  return (
    <div className='delivery-main'>
      <div className='delivery-list'>
        <h1>Доставка</h1>
        <table border="0">
        <tbody>
          {list.map(i => {
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
