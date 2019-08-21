import React, { Component } from 'react';

export default class DelayedButton extends React.Component {
 
  handleClick = (event) => {
    this.props.onDelayedClick(event)
  }
 
  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    );
  }
}