import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import App from '../App';
import Home from '../container/Home.js'
import NavBar from '../container/NaBar'


class Routes extends Component {
    render() {
        return (
            <div>
                <div>
                    <Route path="/" component={NavBar}/>
                    <Route path="/calendar" component={App}/>
                    <Route path="/info" component={Home}/>
                    <Route path="/news" component={App}/>
                </div>
            </div>);
    }
}
export default Routes;

