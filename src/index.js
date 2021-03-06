import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import Routes from './js/config/router';
import { Router  } from 'react-router-dom'
import createBrowaseHistory from 'history/createBrowserHistory'

///require('./styles/index.scss');

const history = createBrowaseHistory();
ReactDOM.render(
    <Router  history={history}>
        <Routes />
    </Router >, document.getElementById('app'));
