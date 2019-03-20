// src/components/Wallet/Exchange.js

import React, { Component } from 'react'
import './styles.css';

const currencies = ['USD', 'BTC', 'ETH', 'EOS'];

const CurrencyDropDown = ({ fromOrTo, currencies, context }) => ( // context = this
    <select name={fromOrTo} defaultValue={context.state.from} onChange={context.pairChange} className="exchange-select">
        {currencies.filter(curr => context.state[fromOrTo === 'to' ? 'from' : 'to'] !== curr).map(curr => <option key={curr}>{curr}</option>)}
    </select>
)

class Exchange extends Component {
    constructor() {
        super();
        this.state = {
            from: 'USD',
            to: 'BTC'
        }
        this.pairChange = this.pairChange.bind(this);
    }
    pairChange(e) {
        const { name, value } = e.target;
        const newState = { ...this.state, [name]: value };
        this.setState(newState);
    }

    render() {
        return (
            <table id="exchange-table">
                <tbody>
                    <tr>
                        <td className="exchange-td">
                            <CurrencyDropDown fromOrTo='from' currencies={currencies} context={this} />
                        </td>
                        <td className="exchange-td">
                            <div className="crypto-price-exchange" title='0.751'>0.751</div>
                        </td>
                        <td className="exchange-td">
                            <CurrencyDropDown fromOrTo='to' currencies={currencies} context={this} />
                        </td>
                    </tr>
                    <tr>
                        <td className="exchange-td"><input id="exchange-amount" type='text' /></td>
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

export default Exchange