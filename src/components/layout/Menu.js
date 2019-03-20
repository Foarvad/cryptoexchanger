// src/components/layout/Header.js

import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const linkPressedStyle = {
    background: '#dbdbdb',
    color: '#2d2d2d'
}
const tabs = ['market', 'wallet'];

export default class Menu extends Component {
    constructor() {
        super();
        this.state = {
            activeTab: 0
        }
    }
    linkClick = e => {
        const { name } = e.target;
        this.setState({
            activeTab: +name
        })
    }
    render() {
        return (
            <div id="menu">
                {tabs.map((value, i) => (
                    <Link
                        onClick={this.linkClick}
                        style={Object.assign({}, this.state.activeTab === i ? linkPressedStyle : {}, { width: 100 / tabs.length + '%' })}
                        className="menu-item"
                        key={value}
                        name={i}
                        to={"/" + value}>
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                    </Link>))}
            </div>
        )
    }
}