import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './App.css';
import { Route } from 'react-router-dom'

// import { setIsOpenAC } from './redux/nav-reducer';

import Header from './components/Header/Header';
import Catalogue from './components/Catalogue/Catalogue';
import TeaCardContainer from './components/TeaCard/TeaCardContainer';
import AboutUs from './components/AboutUs/AboutUs';
import Delivery from './components/Delivery/Delivery';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import NavBarMobile from './components/Header/NavBarMobile';
import NavMobile from './components/NavMobile/NavMobile';

const App = () => {
  const { isOpen } = useSelector(({ nav }) => ({ isOpen: nav.isOpen }))
  // const blured = isOpen ? "app-wrapper-content blured" : "app-wrapper-content"
  return (
    <div className="App">
      {/* <NavBarMobile />  */}
      <NavMobile />
      <Header />
      <div className="app-wrapper-content">
        {isOpen && ( <div className="blured"></div> )}
        <Route exact path='/react-pizza' component={ Main } />
        <Route path='/catalog' component={ Catalogue } />
        <Route path='/teaCard' component={ TeaCardContainer } />
        <Route path='/aboutUs' component={ AboutUs } />
        <Route path='/delivery' component={ Delivery } />
        <Route path='/cart' component={ Cart } />
      </div>
    </div>
  );
}

export default App
