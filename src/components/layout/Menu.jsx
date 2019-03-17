import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const linkPressedStyle = {
    background: '#dbdbdb',
    color: '#2d2d2d'
}

const emptyState = {
    market: {},
    wallet: {}
}

export default class Menu extends Component {
    constructor() {
        super();
        this.state = {
            market: linkPressedStyle
        };
    }
    linkClick = (e) => {
        const { name } = e.target;
        this.setState(emptyState, () => {
            this.setState({
                [name]: linkPressedStyle
            })
        })
    }
    render() {
        return (
            <div id="menu">
                {['market', 'wallet'].map(value => (<Link onClick={this.linkClick} style={this.state[value]} className="menu-item" key={value} name={value} to={"/" + value}>{value.charAt(0).toUpperCase() + value.slice(1)}</Link>))}
            </div>
        )
    }
}