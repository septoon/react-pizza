import React, { useState } from 'react'
import './CatalogItem.css'
import { ingredients } from '../../../common/json/ingredients'

const IndependentItem = ({ prices, isChange, subtitle, id, composition, title, image, onClickAddPizza }) => {
  const priceHolder = React.createRef()

  const [activeSize, setActiveSize] = useState('30 см')
  const [activePrice, setActivePrice] = useState(prices[0])
  const [additives, setAdditives] = useState({})
  
  const onAddPizza = () => {
    const obj = {
      id, title, image, activePrice, activeSize, additives
    }
    onClickAddPizza(obj)
  }
  return (
    <div className="independent">
      <div className="left">
        <div className="catalog_item_block">
            <img src={image} alt="" className="image" />
            <span className="name" >{title}</span>
            <span className="description" >{composition.small}</span>
            <span className="description" >{composition.medium}</span>
            <span className="description" >{composition.large}</span>
        </div>
        <div className="catalog_item_block">
          <div className="size">
          
            <button onClick={ (e) => {
              isChange = true
              setActivePrice(prices[0])
              setActiveSize('30 см')
            } } onBlur={ () => { isChange = false}} className="size_item">Ø 30 см</button>

            <button onClick={ (e) => {
              isChange = true
              setActivePrice(prices[1])
              setActiveSize('40 см')
            } } onBlur={ () => { isChange = false}} className="size_item">Ø 40 см</button>
            
            <button onClick={ (e) => {
              isChange = true
              setActivePrice(prices[2])
              setActiveSize('50 см')
            } } onBlur={ () => { isChange = false}} className="size_item">Ø 50 см</button>

          </div>
          <span className="packing_item">+40₽ к стоимости, за упаковку</span>
          <div className="price_holder">
            <span className="price pr_inp">
              <span className="price_count"> 
              <b ref={priceHolder} >{activePrice}&nbsp;</b> 
              ₽ </span>
            </span>
            <button className="btn_order" 
              onClick={ onAddPizza }
              >+ Добавить </button>
          </div>
        </div>
      </div>
      <div className="right">
        <h2>{subtitle}</h2>
        <div className="additives">
          {
            ingredients.map(i => {
              return (
                <div className="additives_item">
                  <div className="additives_text">
                    <span>{i.name}</span>
                    <span>{i.price}</span>
                  </div>
                  <button className="additives_bth" onClick={ (e) => {
                    setAdditives({
                      'name': i.name,
                      'price': i.price
                    })
                  }}>+</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default IndependentItem