import React from 'react'
import CatalogItem from './CatalogItem/CatalogItem'
import classes from './Catalogue.module.css'
import {useSelector, useDispatch} from 'react-redux'

import { addCatalogList, toggleIsActive } from "../../redux/catalog-reducer"
import { addPriceCount } from "../../redux/basket-reducer"
import catalogList from '../../common/json/catalog-list'

const Catalogue = props => {
  const dispatch = useDispatch()
  const { catalogPage, isActive } = useSelector(({catalogPage}) => ({
    catalogPage: catalogPage,
    isActive: catalogPage.isActive
  }))

  React.useEffect(() => { 
    dispatch(addCatalogList(catalogList))
  }, [])

  return (
    <div className={classes.catalog_wrapper} >
      <CatalogItem catalogPage={catalogPage}
                   toggleIsActive={toggleIsActive}
                   addPriceCount={addPriceCount}
                   isActive={isActive} />
    </div>
  )
}

export default Catalogue
