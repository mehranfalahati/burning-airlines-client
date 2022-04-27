import React, { Component } from "react";

class DisplayFlights extends Component {
    render() {
        return (
            <div>
                <h2>{ this.props.origin }</h2>
                <h2>{ this.props.destination }</h2>
            </div>
        )
    }
}

export default DisplayFlights;
