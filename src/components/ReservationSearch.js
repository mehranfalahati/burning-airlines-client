import React, {Component} from "react";
import SearchForm from "./SearchForm";
import DisplayFlights from "./DisplayFlights";
import axios from "axios";

const SERVER_URL = 'http://localhost:3000/flights.json';

class ReservationSearch extends Component {
    constructor() {
        super();
        this.state = {
            flights: []
        };
        this.saveFlights = this.saveFlights.bind(this);
    }

    componentDidMount() {
        const fetchFlights = () => {
            axios(SERVER_URL).then((response) => {
                this.setState({flights: response.data});
                setTimeout(fetchFlights, 5000);
            });
        };
        fetchFlights();
    }

    saveFlights(content) {
        axios.post(SERVER_URL, {content: content}).then((response) => {
            console.log(response)
            this.setState({flights: [response.data, ...this.state.flights]});
        });
    }

    render() {
        return(
            <div>
                <SearchForm onSubmit={this.fetchFlights} />
                <DisplayFlights />
            </div>
        );
    }
}

export default ReservationSearch;