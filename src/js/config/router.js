import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import App from '../App';
import Home from '../container/News.js'
import NavBar from '../container/NaBar'


class Routes extends Component {
    render() {
        return (
            <div>
                <div>
                    <Route path="/" component={NavBar}/>
                    <Route path="/calendar" component={App}/>
                    <Route path="/news" component={Home}/>
                    <Route path="/test" component={App}/>
                </div>
            </div>);
    }
}
export default Routes;

