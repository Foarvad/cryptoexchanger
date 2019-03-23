// src/components/Wallet/Balance.js

import React, { Component } from 'react'
import './styles.css';

class Balance extends Component {
    render() {
        return (
            <table id="balance-table">
                <tbody>
                    <tr>
                        <td className="balance-td">USD: <b>0</b></td>
                        <td className="balance-td">BTC: <b>0</b></td>
                    </tr>
                    <tr>
                        <td className="balance-td">ETH: <b>0</b></td>
                        <td className="balance-td">EOS: <b>0</b></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Balance