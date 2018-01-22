import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import App from '../App';
import Home from '../container/Home.js'
import NavBar from '../container/NaBar'
import Calender from '../container/Calender'
import News from '../container/News'

class Routes extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar/>
                    <Route exact path="/" component={News}/>
                    <Route path="/calender" component={Calender}/>
                    <Route path="/news" component={News}/>
                    <Route path="/test" component={Home}/>
                </div>
            </div>);
    }
}
export default Routes;

