import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                {this.props.text}
            </div>
        )
    }
}