// src/components/Wallet/Exchange.js

import React, { Component } from 'react'
import './styles.css';

class Exchange extends Component {
    render() {
        return (
            <table id="exchange-table">
                <tbody>
                    <tr>
                        <td className="exchange-td">
                            <select className="exchange-select">
                                <option>USD</option>
                                <option>BTC</option>
                                <option>ETH</option>
                                <option>EOS</option>
                            </select>
                        </td>
                        <td className="exchange-td">
                            <div className="crypto-price-exchange">0.751</div>
                        </td>
                        <td className="exchange-td">
                            <select className="exchange-select">
                                <option>ETH</option>
                                <option>BTC</option>
                                <option>USD</option>
                                <option>EOS</option>
                            </select>
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