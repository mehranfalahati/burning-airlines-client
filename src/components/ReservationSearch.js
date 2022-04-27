import React, {Component} from "react";
import SearchForm from "./SearchForm";
import axios from "axios";

const SERVER_URL = 'http://localhost:3000/flights.json';

class ReservationSearch extends Component {
    render() {
        return(
            <div>
                <SearchForm onSubmit={this.fetchFlights} />
            </div>
        );
    }
}

export default ReservationSearch;