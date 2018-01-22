import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
//import nav from './NavBar.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'


class NavBar extends React.Component {

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
                            <Link to="/news">УГКЦ св. Миколая у Берлін</Link >
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#"><Link  to="/news">Новини</Link></NavItem>
                            <NavItem eventKey={2} href="/calender"><Link to="/calender">Календар</Link></NavItem>
                            <NavItem eventKey={3} href="#">Інфо</NavItem>
                            <NavItem eventKey={4} href="#">Контакти</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>


        );
    }
}
export default NavBar;