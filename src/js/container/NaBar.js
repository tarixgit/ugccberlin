import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
//import nav from './NavBar.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'


class NavBar extends React.Component {

    render() {
        return (
            <div role="navigation">
                { /*<Link to="/">Про УГКЦ Берлін</Link>
                <Link to="/calendar">Календар</Link>
                <span > | </span>
                <Link to="/info">Ввійти</Link>
                <span>or</span>
                <Link to="/news">news</Link>
                */}
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">React-Bootstrap</Link >
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="/calendar"><Link  to="/info">Link</Link></NavItem>
                            <NavItem eventKey={2} href="/calendar"><Link to="/info">Link</Link></NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1} href="/info"><Link  to="/info">Action</Link></MenuItem>
                                <MenuItem eventKey={3.2} href="/news"><Link  to="/news">Another action</Link></MenuItem>
                                <MenuItem eventKey={3.3} href="/info"><Link  to="/info">Something else here</Link></MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3} href="/news"><Link  to="/news">Separated link</Link></MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Link Right</NavItem>
                            <NavItem eventKey={2} href="#">Link Right</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>


        );
    }
}
export default NavBar;