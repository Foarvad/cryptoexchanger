// src/App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateExchangeRate } from './actions';
import './App.css';
import Header from './components/layout/Header';
import Menu from './components/layout/Menu';
import Footer from './components/layout/Footer';
import Market from './components/Market';
import Wallet from './components/Wallet';
import Preloader from './components/layout/Preloader';
import { fetchData } from './Utils';

function mapDispatchToProps(dispatch) {
  return {
    updateExchangeRate: value => dispatch(updateExchangeRate(value))
  }
}
function mapStateToProps(state) {
  return {
    exchangeRate: state.exchangeRate
  }
}
const pairs = ['btc-usd', 'btc-eth', 'btc-eos', 'eth-usd', 'eth-eos', 'eos-usd']; // Without reversed
class App extends Component {
  componentDidMount() {
    fetchData(this, pairs);
    this.timer = setInterval(() => fetchData(this, pairs), 10000);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div id="body">
            <Header text="CryptoExchanger" />
            <Menu />
            <div id="content">
              {
                Object.keys(this.props.exchangeRate).length === pairs.length * 2 ?
                  <React.Fragment>
                    <Route exact path="/" component={Market} />
                    <Route exact path="/market" component={Market} />
                    <Route exact path="/wallet" component={Wallet} />
                  </React.Fragment>:<Preloader />
              }
            </div>
            <Footer text="foarvad@gmail.com" />
          </div>
        </div>
      </Router>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)