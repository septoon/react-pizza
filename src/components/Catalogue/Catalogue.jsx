import React from 'react'
import CatalogItem from './CatalogItem/CatalogItem'
import classes from './Catalogue.module.css'
import {useSelector, useDispatch} from 'react-redux'

import { addCatalogList, toggleIsActive } from "../../redux/catalog-reducer"
import { addPizzaToCartAC, setTotalCountAC, setTotalPriceAC } from "../../redux/cart-reducer"
import catalogList from '../../common/json/catalog-list'

const Catalogue = props => {
  const dispatch = useDispatch()
  const { catalogData, isActive } = useSelector(({ catalogPage }) => ({
    catalogData: catalogPage.catalogData,
    isActive: catalogPage.isActive
  }))

  const items = useSelector(({ cart }) => ({
    items: cart.items
  }))
  const item = items.items

  const totalCount = item.length + 1

  // const totalPrice = item.reduce((a, b) => a = a + parseInt(b.activePrice), 0)
  
  // console.log(totalPrice)

  React.useEffect(() => { 
    dispatch(addCatalogList(catalogList))
  }, [dispatch])
  
  const addPizzaToCart = (obj) => {
    dispatch(addPizzaToCartAC(obj))
    dispatch(setTotalCountAC(totalCount))
    // dispatch(setTotalPriceAC(totalPrice))
  }
  
  return (
    <div className={classes.catalog_wrapper} >
      <div className={classes.wrapper} >
        {catalogData.map(item => (
              <CatalogItem key={item.id}
                          onClickAddPizza={addPizzaToCart}
                          {...item}
                          toggleIsActive={toggleIsActive}
                          isActive={isActive} />
              ))}
      </div>  
    </div>
  )
}

export default Catalogue

      //   <div>
      //    <img src={itemsToCart.image} alt={itemsToCart.title} />
      //    <h2>Название: {itemsToCart.title}</h2>
      //    <p>Размер: {itemsToCart.activeSize} </p>
      //    <p>Цена: {itemsToCart.activePrice} </p>
      //  </div>