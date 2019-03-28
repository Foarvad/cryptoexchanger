// src/components/Wallet/Balance.js

import React, { Component } from 'react'
import './styles.css';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        balance: state.balance
    }
}

class Balance extends Component {
    render() {
        return (
            <table id="balance-table">
                <tbody>
                    <tr>
                        <td className="balance-td">USD: <b>{this.props.balance.USD}</b></td>
                        <td className="balance-td">BTC: <b>{this.props.balance.BTC}</b></td>
                    </tr>
                    <tr>
                        <td className="balance-td">ETH: <b>{this.props.balance.ETH}</b></td>
                        <td className="balance-td">EOS: <b>{this.props.balance.EOS}</b></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default connect(mapStateToProps)(Balance)