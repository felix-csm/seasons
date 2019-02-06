import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    //alternate way to initialize the state
    state = { lat: null, errorMsg: '' };

    componentDidMount() {
        //initial data loading here
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMsg: err.message })
        );
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    renderContent() {
        if (this.state.errorMsg && !this.state.lat) {
            return <div>Error: {this.state.errorMsg}</div>;
        }

        if (!this.state.errorMsg && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner message="Please accept the location request." />;
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);