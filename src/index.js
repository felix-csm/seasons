import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);//passing props to parents constructor
        this.state = { lat: null, errorMsg: '' };
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude })
            },
            err => {
                this.setState({ errorMsg: err.message })
            }
        );
    }

    render() {
        if(this.state.errorMsg && !this.state.lat) {
            return <div>Error: { this.state.errorMsg }</div>;
        }

        if(!this.state.errorMsg && this.state.lat) {
            return <div>Latitude: { this.state.lat }</div>;
        }

        return <div>Loading...</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);