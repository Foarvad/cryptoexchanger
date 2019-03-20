// src/components/Wallet/Wallet.js

import React, { Component } from 'react'
import './styles.css';

export default class Wallet extends Component {
    render() {
        return (
            <div>
                <table id="wallet-table">
                    <tbody>
                        <tr>
                            <td className="wallet-td">USD: <b>0</b></td>
                            <td className="wallet-td">BTC: <b>0</b></td>
                        </tr>
                        <tr>
                            <td className="wallet-td">ETH: <b>0</b></td>
                            <td className="wallet-td">EOS: <b>0</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
