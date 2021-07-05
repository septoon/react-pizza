import React from 'react'
import CatalogItem from './CatalogItem/CatalogItem'
import classes from './Catalogue.module.css'

const Catalogue = props => {
  return (
    <div className={classes.catalog_wrapper} >
      <CatalogItem catalogPage={props.catalogPage}
                   toggleIsActive={props.toggleIsActive}
                   addPriceCount={props.addPriceCount}
                   isActive={props.isActive} />
    </div>
  )
}

export default Catalogue
