import './App.css';
import { Route } from 'react-router-dom'

import Header from './components/Header/Header';
import Catalogue from './components/Catalogue/Catalogue';
import TeaCardContainer from './components/TeaCard/TeaCardContainer';
import AboutUs from './components/AboutUs/AboutUs';
import Delivery from './components/Delivery/Delivery';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import ContactUs from './components/emailjs/EmailForm';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className='app-wrapper-content'>   
        <Route exact path='/react-pizza' component={ Main } />
        <Route path='/catalog' component={ Catalogue } />
        <Route path='/teaCard' component={ TeaCardContainer } />
        <Route path='/aboutUs' component={ AboutUs } />
        <Route path='/delivery' component={ Delivery } />
        <Route path='/cart' component={ Cart } />
        <Route path='/order' component={ ContactUs } /> 
      </div>
    </div>
  );
}

export default App
