// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component {
  //   handleClick = () => {
  //     console.log(this.props.onReceiveCoordinates);
  //   };

  handleClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return (
      <div>
        <button
          value="coords button"
          onClick={event => this.handleClick(event)}
        >
          BUTTON
        </button>
      </div>
    );
  }
}

export default CoordinatesButton;
