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
                        <td className="balance-td" title={this.props.balance.USD}>USD: <b>{(this.props.balance.USD + '').slice(0, 10)}</b></td>
                        <td className="balance-td" title={this.props.balance.BTC}>BTC: <b>{(this.props.balance.BTC + '').slice(0, 10)}</b></td>
                    </tr>
                    <tr>
                        <td className="balance-td" title={this.props.balance.ETH}>ETH: <b>{(this.props.balance.ETH + '').slice(0, 10)}</b></td>
                        <td className="balance-td" title={this.props.balance.EOS}>EOS: <b>{(this.props.balance.EOS + '').slice(0, 10)}</b></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default connect(mapStateToProps)(Balance)