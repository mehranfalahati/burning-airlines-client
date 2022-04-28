import React, {Component} from "react";

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            origin: '',
            destination: ''
        };
        this._handleInputOrigin = this._handleInputOrigin.bind(this);
        this._handleInputDestination = this._handleInputDestination.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleInputOrigin(event) {
        this.setState({origin: event.target.value});
    }

    _handleInputDestination(event) {
        this.setState({destination: event.target.value});
    }

    _handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.origin, this.state.destination);
        this.setState({origin: '', destination: ''});
    }

    render() {
        return(
            <form onSubmit={this._handleSubmit}>
                <label>Origin</label>
                <input type="search" required placeholder="JFK" onChange={this._handleInputOrigin} />

                <label>Destination</label>
                <input type="search" required placeholder="SFO" onChange={this._handleInputDestination} />

                <button type="submit" >Search</button>
            </form>
        );
    }
};



export default SearchForm;