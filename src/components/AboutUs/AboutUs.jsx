import React from 'react'
import classes from './AboutUs.module.css'

const AboutUs = (props) => {
  return (
    <div className={classes.wrapper}>
      <h1>О нас</h1>
      <span>Пиццерия "Виват" это широкий ассортимент пиццы,
        разливного пива а также напитки и десерты.</span>
      <span>Бесплатная доставка пиццы по городу бесплатно! В кафе WIFI бесплатно!</span>
      <span>Мы ждем вас по адресу: Алушта, ул. Горького, 54-а (возле фирменного магазина "Массандра")</span>
      <span>КОНТАКТНЫЙ ТЕЛЕФОН: +7 978 704 88 06</span>
    </div>
  )
}

export default AboutUs
