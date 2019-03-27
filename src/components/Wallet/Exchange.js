// src/components/Wallet/Exchange.js

import React, { Component } from 'react'
import './styles.css';
import { connect } from "react-redux";
import { updateExchangeAmount, updateExchangeFrom, updateExchangeTo } from '../../actions';

function mapDispatchToProps(dispatch) {
    return {
        updateExchangeAmount: value => dispatch(updateExchangeAmount(value)),
        updateExchangeFrom: cryptoName => dispatch(updateExchangeFrom(cryptoName)),
        updateExchangeTo: cryptoName => dispatch(updateExchangeTo(cryptoName))
    }
}

function mapStateToProps(state) {
    return {
        exchangeAmount: state.exchangeAmount,
        exchangeFrom: state.exchangeFrom,
        exchangeTo: state.exchangeTo
    }
}

const currencies = ['USD', 'BTC', 'ETH', 'EOS'];

class Exchange extends Component {
    constructor() {
        super();
        this.pairChange = this.pairChange.bind(this);
        this.amountChange = this.amountChange.bind(this);
    }
    pairChange(e) {
        const { name, value } = e.target;
        name === 'from' ? this.props.updateExchangeFrom(value) : this.props.updateExchangeTo(value)
    }

    amountChange(e) {
        const { value } = e.target;
        this.props.updateExchangeAmount(value)
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
                            <div className="crypto-price-exchange" title='0.751'>0.751</div>
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
                        <td className="exchange-td">0</td>
                    </tr>
                    <tr>
                        <td className="exchange-td" colSpan="3"><input id="exchange-submit" type="submit" value="Exchange" />
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exchange)