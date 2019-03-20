// src/components/Market/index.js

import React, { Component } from 'react';
import './styles.css';

class index extends Component {
    render() {
        return (
            <div>
                <table id="market-table">
                    <tbody>
                        <tr>
                            <td className="market-td"><img className="crypto-logo" src={require("./img/BTC.png")} alt="BTC-logo" />BTC</td>
                            <td className="market-td">
                                <div className="crypto-price">$3581</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="market-td"><img className="crypto-logo" src={require("./img/ETH.png")} alt="ETH-logo" />ETH</td>
                            <td className="market-td">
                                <div className="crypto-price">$149</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="market-td" style={{ borderBottom: '0' }}><img className="crypto-logo" src={require("./img/EOS.png")} alt="EOS-logo" />EOS</td>
                            <td className="market-td" style={{ borderBottom: '0' }}>
                                <div className="crypto-price">$0.32</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default index