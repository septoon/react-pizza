import './App.css';
import { Route } from 'react-router-dom'

import Header from './components/Header/Header';
// import NavBar from './components/NavBar/NavBar';
import CatalogueContainer from './components/Catalogue/CatalogueContainer';
import TeaCardContainer from './components/TeaCard/TeaCardContainer';
import AboutUs from './components/AboutUs/AboutUs';
import DeliveryContainer from './components/Delivery/DeliveryContainer';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <NavBar /> */}
      <div className='app-wrapper-content'>   
        <Route exact path='/react-pizza' component={ Main } />
        <Route path='/catalog' component={ CatalogueContainer } />
        <Route path='/teaCard' component={ TeaCardContainer } />
        <Route path='/aboutUs' component={ AboutUs } />
        <Route path='/delivery' component={ DeliveryContainer } />
        <Route path='/cart' component={ Cart } />
      </div>
    </div>
  );
}

export default App;
