import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import './App.scss';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <nav>
        <Link to="/shop">Shop</Link>
      </nav>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
