import React, { Component } from "react";

const DisplayFlights = (props) => {
    if (props.flights.length > 0) {
        return (
            <div>
                <p>Origin: {props.flights[0].origin}</p>
                <p>Destination: {props.flights[0].destination}</p>
                <p>{props.flights[0].date}</p>
            </div>
        )
    } else return (
            <div>
                <h1>No Flights</h1>
            </div>
        )
    

  
}

export default DisplayFlights;
