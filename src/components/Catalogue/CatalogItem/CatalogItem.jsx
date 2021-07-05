import React, { useState } from 'react'
import classes from './CatalogItem.module.css'
// import Form from './Form/Form';

const CatalogItem = ({ catalogPage, addPriceCount }) => {
  const priceHolder = React.createRef()

  const [currentPrice, setCurrentPrice] = useState('');
  // const [order, setOrder] = useState({});
  return (
    <div className={classes.wrapper} >
      {catalogPage.catalogData.map((c, index) => {
        return <div key={c.id} className={classes.catalog_item} >
        <img src={c.image} alt={c.title} className={classes.image} />
        <span className={classes.name} >{c.title}</span>
        <span className={classes.description} >Состав: {c.composition}</span>
        <div className={classes.size}>
         
          <button value={index} onClick={ (e) => {
            c.isChange = true
            setCurrentPrice(c.price.small)
          } } onBlur={ () => { c.isChange = false}} className={classes.size_item }>Ø 30 см</button>
           
          <button value={index} onClick={ (e) => {
            c.isChange = true
            setCurrentPrice(c.price.middle)
          } } onBlur={ () => { c.isChange = false}} className={classes.size_item}>Ø 40 см</button>
          
          <button value={index} onClick={ (e) => {
            c.isChange = true
            setCurrentPrice(c.price.large)
          } } onBlur={ () => { c.isChange = false}} className={classes.size_item}>Ø 50 см</button>

        </div>
        <div className={classes.price_holder}>
          <span className={`${classes.price} ${classes.pr_inp}`}>
            <span className={classes.price_count}> 
            <b ref={priceHolder} >{!c.isChange ? c.price.small : currentPrice}</b> 
            руб. </span>
          </span>
          <button className={classes.btn_order} 
            onClick={() => {
              const price = !c.isChange ? c.price.small : currentPrice
              addPriceCount(price)
              
            }}
            >+ Добавить</button>
        </div>

      </div>
      }
       )}
    </div>
  )
}

export default CatalogItem
