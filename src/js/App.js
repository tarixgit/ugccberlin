import React, { Component } from 'react';
import logo from '../../public/icons/logo.svg';
import '../css/App.css';
import NavBar from './container/NavBar'


class App extends Component {
    //TODO: not used anymore - to remove
    //old version
    render() {
        return (
            <div className="container">
                <NavBar/>
                {this.props.children}
            </div>
        );
    }
}

export default App;
