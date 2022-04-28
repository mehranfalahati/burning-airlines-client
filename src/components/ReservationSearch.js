import React, {Component} from "react";
import SearchForm from "./SearchForm";
import DisplayFlights from "./DisplayFlights";
import axios from "axios";

const SERVER_URL = 'http://localhost:3000/flights.json';

class ReservationSearch extends Component {
    constructor() {
        super();
        this.state = {
            result: [],
            flights: []
        };
        this._eventHandle = this._eventHandle.bind(this);
    }


    
    componentDidMount() {
        const fetchFlights = () => {
            axios(SERVER_URL).then((response) => {
                //console.log(response.data)
                this.setState({flights: response.data});
                setTimeout(fetchFlights, 5000);
            });
        };
        fetchFlights();
    }


    _eventHandle(origin, destination) {
        //console.log({origin: origin, destination: destination})
        let matchFlight = this.state.flights.filter((flight) => {
            return flight.origin === origin && flight.destination === destination
        })
        //console.log(matchFlight)
        this.setState(matchFlight)

    }

    render() {
        return(
            
            <div>
                <SearchForm onSubmit={this._eventHandle} />
                <DisplayFlights flights={this.state.result} />
            </div>
        );
    }
}

export default ReservationSearch;