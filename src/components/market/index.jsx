import React, { Component } from 'react';
import './styles.css';

export default class index extends Component {
    render() {
        return (
            <div>
                <table id="market-table">
                    <tr>
                        <td className="market-td"><img className="crypto-logo" src={require("./logos/BTC.png")} />BTC</td>
                        <td className="market-td">
                            <div className="crypto-price">$3581</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="market-td"><img className="crypto-logo" src={require("./logos/ETH.png")} />ETH</td>
                        <td className="market-td">
                            <div className="crypto-price">$149</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="market-td" style={{borderBottom: '0'}}><img className="crypto-logo" src={require("./logos/EOS.png")} />EOS</td>
                        <td className="market-td" style={{borderBottom: '0'}}>
                            <div className="crypto-price">$0.32</div>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
