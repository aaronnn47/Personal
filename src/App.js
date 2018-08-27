import React, { Component } from 'react';
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Buy from './Components/Buy/buy'
import Account from './Components/Account/Account'
import Cart from './Components/Cart/Cart'
import Wallet from './Components/Wallet/Wallet'

class App extends Component {

  
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/buy' component={Buy}/>
          <Route path='/account' component={Account}/>
          <Route path='/wallet' component={Wallet}/>
          <Route path='/cart' component={Cart}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
