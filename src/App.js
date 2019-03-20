// src/App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Menu from './components/layout/Menu';
import Footer from './components/layout/Footer';
import Market from './components/Market/index';
import Wallet from './components/Wallet/index';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div id="body">
            <Header text="CryptoExchanger" />
            <Menu />
            <div id="content">
            <Route exact path="/" component={Market} />
            <Route exact path="/market" component={Market} />
            <Route exact path="/wallet" component={Wallet} />
            </div>
            <Footer text="foarvad@gmail.com" />
          </div>
        </div>
      </Router>
    )
  }
}

export default App