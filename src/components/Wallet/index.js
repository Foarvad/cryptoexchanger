// src/components/Wallet/index.js

import React, { Component } from 'react';
import Balance from './Balance';
import Exchange from './Exchange';

class Wallet extends Component {
    render() {
        return (
            <div>
                <h1>Your wallet</h1>
                <Balance />
                <h1>Exchange</h1>
                <Exchange />
            </div>
        )
    }
}

export default Wallet