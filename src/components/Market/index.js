// src/components/Market/index.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';

function mapStateToProps(state) {
    return {
        exchangeRate: state.exchangeRate
    }
}

class Market extends Component {
    render() {
        return (
            <div>
                <table id="market-table">
                    <tbody>
                        <tr>
                            <td className="market-td"><img className="crypto-logo" src={require("./img/BTC.png")} alt="BTC-logo" />BTC</td>
                            <td className="market-td">
                                <div className="crypto-price" title={this.props.exchangeRate['btc-usd']}>${(this.props.exchangeRate['btc-usd']+'').slice(0,7)}</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="market-td"><img className="crypto-logo" src={require("./img/ETH.png")} alt="ETH-logo" />ETH</td>
                            <td className="market-td">
                                <div className="crypto-price" title={this.props.exchangeRate['eth-usd']}>${(this.props.exchangeRate['eth-usd']+'').slice(0,7)}</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="market-td" style={{ borderBottom: '0' }}><img className="crypto-logo" src={require("./img/EOS.png")} alt="EOS-logo" />EOS</td>
                            <td className="market-td" style={{ borderBottom: '0' }}>
                                <div className="crypto-price" title={this.props.exchangeRate['eos-usd']}>${(this.props.exchangeRate['eos-usd']+'').slice(0,7)}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Market)