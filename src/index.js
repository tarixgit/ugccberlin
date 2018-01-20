import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import Routes from './js/config/router';
//import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

ReactDOM.render(
    <BrowserRouter history={history}>
        <Routes />
    </BrowserRouter>, document.getElementById('app'));
//registerServiceWorker();
