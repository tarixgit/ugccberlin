import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import Routes from './js/config/router';
//import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>, document.getElementById('app'));
//registerServiceWorker();
