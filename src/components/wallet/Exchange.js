import React, { Component } from 'react'
import './styles.css';

export default class Exchange extends Component {
    render() {
        return (
            <div>
                <table id="exchange-table">
                    <tr>
                        <td class="exchange-td">
                            <select class="exchange-select">
                                <option>USD</option>
                                <option>BTC</option>
                                <option>ETH</option>
                                <option>EOS</option>
                            </select>
                        </td>
                        <td class="exchange-td">
                            <div class="crypto-price-exchange">0.751</div>
                        </td>
                        <td class="exchange-td">
                            <select class="exchange-select">
                                <option>ETH</option>
                                <option>BTC</option>
                                <option>USD</option>
                                <option>EOS</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="exchange-td"><input id="exchange-amount" type='text' /></td>
                        <td class="exchange-td"><img id="exchange-arrow" src={require("./img/arrow.png")} alt="convert-arrow" /></td>
                        <td class="exchange-td">0</td>
                    </tr>
                    <tr>
                        <td class="exchange-td" colspan="3"><input id="exchange-submit" type="submit" value="Exchange" />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
