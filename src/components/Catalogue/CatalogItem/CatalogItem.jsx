import React from 'react'
import './CatalogItem.css'

const CatalogItem = ({ id, image, title, composition, prices, isChange, onClickAddPizza }) => {
  const priceHolder = React.createRef()

  const [activeSize, setActiveSize] = React.useState('30 см')
  const [activePrice, setActivePrice] = React.useState(prices[0])
  
  let count = 0

  const onAddPizza = () => {
    const obj = {
      id, title, image, activePrice, activeSize
    }
    count++
    onClickAddPizza(obj, count)
    // console.log('Редакс ', items)
  }
  return (
     <div className="catalog_item" >
        <img src={image} alt={title} className="image" />
        <span className="name" >{title}</span>
        <span className="description" >Состав: {composition}</span>
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
  )
}

  //   <div className={classes.wrapper} >
  //     {catalogPage.catalogData.map((c, index) => {
  //       let pizzaPrice = !c.isChange ? c.price.small : currentPrice

  //       return <div key={c.id} className={classes.catalog_item} >
  //       <img src={c.image} alt={c.title} className={classes.image} />
  //       <span className={classes.name} >{c.title}</span>
  //       <span className={classes.description} >Состав: {c.composition}</span>
  //       <div className={classes.size}>
         
  //         <button value={index} onClick={ (e) => {
  //           c.isChange = true
  //           setCurrentPrice(c.price.small)
  //         } } onBlur={ () => { c.isChange = false}} className={classes.size_item }>Ø 30 см</button>
           
  //         <button value={index} onClick={ (e) => {
  //           c.isChange = true
  //           setCurrentPrice(c.price.middle)
  //         } } onBlur={ () => { c.isChange = false}} className={classes.size_item}>Ø 40 см</button>
          
  //         <button value={index} onClick={ (e) => {
  //           c.isChange = true
  //           setCurrentPrice(c.price.large)
  //         } } onBlur={ () => { c.isChange = false}} className={classes.size_item}>Ø 50 см</button>

  //       </div>
  //       <div className={classes.price_holder}>
  //         <span className={`${classes.price} ${classes.pr_inp}`}>
  //           <span className={classes.price_count}> 
  //           <b ref={priceHolder} >{pizzaPrice}</b> 
  //           руб. </span>
  //         </span>
  //         <button className={classes.btn_order} 
  //           onClick={onClickAddPizza}
  //           >+ Добавить </button>
  //       </div>

  //     </div>
  //     }
  //      )}
  //   </div>


export default CatalogItem
