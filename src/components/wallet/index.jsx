import React, { Component } from 'react';
import Wallet from './Wallet';
import Exchange from './Exchange';

export default class index extends Component {
    render() {
        return (
            <div>
                <h1>Your wallet</h1>
                <Wallet />
                <h1>Exchange</h1>
                <Exchange />
            </div>
        )
    }
}
