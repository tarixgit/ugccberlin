import React, { Component } from 'react';
import logo from '../icons/logo.svg';
import '../css/App.css';
import NavBar from './container/NaBar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, type and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
