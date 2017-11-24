import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

    render() {
        return (
            <div role="navigation">
                <Link to="/">Про УГКЦ Берлін</Link>
                <Link to="/info">Контакти</Link>
                <span > | </span>
                <Link to="/info">Ввійти</Link>
                <span>or</span>
                <Link to="/news">news</Link>
            </div>


        );
    }
}
export default NavBar;