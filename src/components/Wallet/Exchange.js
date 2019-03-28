// src/components/Wallet/Exchange.js

import React, { Component } from 'react'
import './styles.css';
import { connect } from "react-redux";
import { updateExchangeAmount, updateExchangeFrom, updateExchangeTo, updateExchangePair } from '../../actions';

function mapDispatchToProps(dispatch) {
    return {
        updateExchangeAmount: value => dispatch(updateExchangeAmount(value)),
        updateExchangeFrom: cryptoName => dispatch(updateExchangeFrom(cryptoName)),
        updateExchangeTo: cryptoName => dispatch(updateExchangeTo(cryptoName)),
        updateExchangePair: pair => dispatch(updateExchangePair(pair)),
    }
}

function mapStateToProps(state) {
    return {
        exchangeAmount: state.exchangeAmount,
        exchangeFrom: state.exchangeFrom,
        exchangeTo: state.exchangeTo,
        exchangePair: state.exchangePair,
        exchangeRate: state.exchangeRate
    }
}

const currencies = ['USD', 'BTC', 'ETH', 'EOS'];

class Exchange extends Component {
    constructor() {
        super();
        this.pairChange = this.pairChange.bind(this);
        this.amountChange = this.amountChange.bind(this)
    }
    pairChange(e) {
        const { name, value } = e.target;
        if (name === 'from') {
            this.props.updateExchangeFrom(value)
            this.props.updateExchangePair(value.toLowerCase() + '-' + this.props.exchangeTo.toLowerCase())
        } else {
            this.props.updateExchangeTo(value)
            this.props.updateExchangePair(this.props.exchangeFrom.toLowerCase() + '-' + value.toLowerCase())
        }
    }

    amountChange(e) {
        const { value } = e.target;
        this.props.updateExchangeAmount(value)
    }

    exchange(e){
        e.preventDefault();
        
    }

    render() {
        return (
            <table id="exchange-table">
                <tbody>
                    <tr>
                        <td className="exchange-td">
                            <select name='from' value={this.props.exchangeFrom} onChange={this.pairChange} className="exchange-select">
                                {currencies.filter(curr => this.props.exchangeTo !== curr).map(curr => <option key={curr}>{curr}</option>)}
                            </select>
                        </td>
                        <td className="exchange-td">
                            <div className="crypto-price-exchange" title={this.props.exchangeRate[this.props.exchangePair]}>{(this.props.exchangeRate[this.props.exchangePair]+'').slice(0, 7)}</div>
                        </td>
                        <td className="exchange-td">
                            <select name='to' value={this.props.exchangeTo} onChange={this.pairChange} className="exchange-select">
                                {currencies.filter(curr => this.props.exchangeFrom !== curr).map(curr => <option key={curr}>{curr}</option>)}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="exchange-td"><input id="exchange-amount" onChange={this.amountChange} value={this.props.exchangeAmount} type='text' /></td>
                        <td className="exchange-td"><img id="exchange-arrow" src={require("./img/arrow.png")} alt="convert-arrow" /></td>
                        <td className="exchange-td" title={this.props.exchangeAmount*this.props.exchangeRate[this.props.exchangePair]}>{this.props.exchangeAmount*this.props.exchangeRate[this.props.exchangePair]}</td>
                    </tr>
                    <tr>
                        <td className="exchange-td" colSpan="3"><input id="exchange-submit" type="submit" value="Exchange" onClick={this.exchange}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exchange)