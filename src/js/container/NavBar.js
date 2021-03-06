import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
//import nav from './NavBar.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {login, logout, isLoggedIn} from "../../Auth/Auth";
import { withRouter } from "react-router-dom";



class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: isLoggedIn()
        };
        this.logout = this.logout.bind(this);
    }
    authorize() {
        login();
    }
    logout() {
        logout();
        this.props.history.push('/');
        this.setState({
            isLoggedIn: isLoggedIn()
        });
    }

    render() {
        return (
            <div role="navigation">
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                    <span className='logo'>
                        <a href="/">
                            <img src="./icons/icon.png" height="33" width="33"/></a>
                    </span>
                        <Navbar.Brand>
                            <Link to="/news">УГКЦ св. Миколая у Берліні</Link >
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#"><Link  to="/news">Новини</Link></NavItem>
                            <NavItem eventKey={2} href="/calender"><Link to="/calender">Календар</Link></NavItem>
                            <NavItem eventKey={3} href="#">Інфо</NavItem>
                            <NavItem eventKey={4} href="/contact"><Link to="/contact">Контакти</Link></NavItem>
                            {!this.state.isLoggedIn && <NavItem eventKey={5} href="#" onClick={this.authorize}>Login</NavItem>}
                            {this.state.isLoggedIn && <NavItem eventKey={6} href="#" onClick={this.logout}>Logout</NavItem>}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>



        );
    }
}
export default withRouter(NavBar);