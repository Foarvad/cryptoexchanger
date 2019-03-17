import React, { Component } from 'react'
import './styles.css';

export default class Wallet extends Component {
    render() {
        return (
            <div>
                <table id="wallet-table">
                    <tr>
                        <td class="wallet-td">USD: <b>0</b></td>
                        <td class="wallet-td">BTC: <b>0</b></td>
                    </tr>
                    <tr>
                        <td class="wallet-td">ETH: <b>0</b></td>
                        <td class="wallet-td">EOS: <b>0</b></td>
                    </tr>
                </table>
            </div>
        )
    }
}
