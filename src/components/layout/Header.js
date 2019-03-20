import React, { Component } from 'react';
import './styles.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          {this.props.text}
        </header>
      </div>
    )
  }
}