import React, { Component } from 'react';

export default class CoordinatesButton extends React.Component {
 
  createCoordinates = (event) => {
    const array = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(array)
  }
 
  render() {
    return (
      <button onClick={this.createCoordinates}>Button</button>
    );
  }
}
