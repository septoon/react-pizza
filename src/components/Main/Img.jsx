import React from 'react'
import Loader from '../Loader/Loader.jsx'

const Img = () => {
  const { useEffect, useState } = React
  const [url, setUrl] = useState('')
  useEffect(() => {
    fetch('https://i.ibb.co/JzPdy1C/pizza.png')
      .then(response => response.blob())
      .then((image) => {
        setUrl(URL.createObjectURL(image))
      });
  });
  
  if (!url) {
    return <Loader />
  }
      
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img src ={url} alt="pizza" className='pizza-img'/>
}

export default Img

