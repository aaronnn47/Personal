import React, { Component } from 'react';
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'

class App extends Component {

  
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
