// src/components/Wallet/Exchange.js

import React, { Component } from 'react'
import './styles.css';
import { connect } from "react-redux";
import { updateExchangeAmount, updateExchangeFrom, updateExchangeTo, updateExchangePair, updateBalance } from '../../actions';

const currencies = ['USD', 'BTC', 'ETH', 'EOS'];

function mapDispatchToProps(dispatch) {
    return {
        updateExchangeAmount: value => dispatch(updateExchangeAmount(value)),
        updateExchangeFrom: cryptoName => dispatch(updateExchangeFrom(cryptoName)),
        updateExchangeTo: cryptoName => dispatch(updateExchangeTo(cryptoName)),
        updateExchangePair: pair => dispatch(updateExchangePair(pair)),
        updateBalance: balance => dispatch(updateBalance(balance))
    }
}

function mapStateToProps(state) {
    return {
        exchangeAmount: state.exchangeAmount,
        exchangeFrom: state.exchangeFrom,
        exchangeTo: state.exchangeTo,
        exchangePair: state.exchangePair,
        exchangeRate: state.exchangeRate,
        balance: state.balance,
        minExchange: state.minExchange
    }
}

class Exchange extends Component {
    constructor() {
        super();
        this.pairChange = this.pairChange.bind(this);
        this.amountChange = this.amountChange.bind(this);
        this.exchange = this.exchange.bind(this);
        this.canBeExchanged = this.canBeExchanged.bind(this);
    }
    pairChange(e) {
        const { name, value } = e.target;
        if (name === 'from') {
            this.props.updateExchangeFrom(value);
            this.props.updateExchangePair(value.toLowerCase() + '-' + this.props.exchangeTo.toLowerCase())
        }
        if (name === 'to') {
            this.props.updateExchangeTo(value);
            this.props.updateExchangePair(this.props.exchangeFrom.toLowerCase() + '-' + value.toLowerCase())
        }
        if (name === 'flip') {
            let from = this.props.exchangeFrom;
            this.props.updateExchangeFrom(this.props.exchangeTo);
            this.props.updateExchangeTo(from);
            this.props.updateExchangePair(this.props.exchangePair.split('-').reverse().join('-'))
        }
    }

    amountChange(e) {
        const { value } = e.target;
        if (!isNaN(+value))
            value.includes('.') ? this.props.updateExchangeAmount(value) : this.props.updateExchangeAmount(+value + '')
    }

    exchange() {
        let from = this.props.exchangeFrom;
        let to = this.props.exchangeTo;
        let fromAmount = this.props.exchangeAmount;
        let toAmount = this.props.exchangeAmount * this.props.exchangeRate[this.props.exchangePair];

        if (this.canBeExchanged()) {
            this.props.updateBalance({
                ...this.props.balance,
                [from]: this.props.balance[from] - fromAmount,
                [to]: this.props.balance[to] + toAmount
            });
            this.props.updateExchangeAmount(0)
        }
    }

    canBeExchanged() {
        return this.props.exchangeAmount <= this.props.balance[this.props.exchangeFrom]
            && +this.props.exchangeAmount !== 0
            && +this.props.exchangeAmount >= this.props.minExchange[this.props.exchangeFrom]
            ? true : false
    }

    render() {
        return (
            <table id="exchange-table">
                <tbody>
                    <tr>
                        <td className="exchange-td">Min: {this.props.minExchange[this.props.exchangeFrom]}</td>
                        <td className="exchange-td"><img name="flip" id="flip-arrows" src={require("./img/flip.png")} alt="flip-arrow" title="Flip" onClick={this.pairChange} /></td>
                        <td className="exchange-td"></td>
                    </tr>
                    <tr>
                        <td className="exchange-td">
                            <select name='from' value={this.props.exchangeFrom} onChange={this.pairChange} className="exchange-select">
                                {currencies.filter(curr => this.props.exchangeTo !== curr).map(curr => <option key={curr}>{curr}</option>)}
                            </select>
                        </td>
                        <td className="exchange-td">
                            <div className="crypto-price-exchange" title={this.props.exchangeRate[this.props.exchangePair]}>{(this.props.exchangeRate[this.props.exchangePair] + '').slice(0, 7)}</div>
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
                        <td className="exchange-td" title={this.props.exchangeAmount * this.props.exchangeRate[this.props.exchangePair]}>{this.props.exchangeAmount * this.props.exchangeRate[this.props.exchangePair]}</td>
                    </tr>
                    <tr>
                        <td className="exchange-td" colSpan="3"><input id="exchange-submit" type="submit" value="Exchange" onClick={this.exchange} disabled={!this.canBeExchanged()} />
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exchange)