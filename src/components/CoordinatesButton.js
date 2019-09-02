import React, {Component} from 'react'

class CoordinatesButton extends Component {
    createArr = (e) => {
        const coordinatesArr = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(coordinatesArr)
    }

    render() {
        return(
            <button onClick={this.createArr}>Coordinates</button>
        )
    }
}

export default CoordinatesButton