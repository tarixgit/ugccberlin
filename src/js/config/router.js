import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import App from '../App';
import Home from '../container/Home.js'
import NavBar from '../container/NaBar'
import Calender from '../container/Calender'
import News from '../container/News'
import Contact from '../container/Contact'
import Callback from '../../Auth/Callback'
import { requireAuth } from '../../Auth/Auth';


class Routes extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar/>
                    <Route exact path="/" component={News}/>
                    <Route path="/calender" component={Calender}/>
                    <Route path="/news" component={News}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/callback" component={Callback}/>
                    <Route path="/somespecial" component={Contact} onEnter={requireAuth} />
                </div>
            </div>);
    }
}
export default Routes;
//{...props, requireAuth}
