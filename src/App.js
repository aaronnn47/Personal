import React, { Component } from 'react';
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Buy from './Components/Buy/buy'
import Account from './Components/Account/Account'
import Cart from './Components/Cart/Cart'
import Wallet from './Components/Wallet/Wallet'
import Accessories from './Components/Accessories/Accessories'
import Mens from './Components/Mens/Mens'
import Womens from './Components/Womens/Womens'
import Kids from './Components/Kids/Kids'
import Login from './Components/Login/Login'
import Sell from './Components/Sell/Sell'

class App extends Component {

  
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/home' component={Home}/>
          <Route path='/buy' component={Buy}/>
          <Route path='/account' component={Account}/>
          <Route path='/wallet' component={Wallet}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/mens' component={Mens}/>
          <Route path='/womens' component={Womens}/>
          <Route path='/kids' component={Kids}/>
          <Route path='/accessories' component={Accessories}/>
          <Route path='/sell' component={Sell}/>
          
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
