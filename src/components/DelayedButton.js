// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

    onTimeDelay = (event) => {
        return ( setTimeout(() => {
            event.persist()
            this.props.onDelayedClick(event)
         }, this.props.delay)
        )
    }

    render() {
        return <button onClick={ this.onTimeDelay } />
    }
}