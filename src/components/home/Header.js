import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link,
    NavLink

} from 'react-router-dom'
import '../style.css';

class Header extends Component {
    render() {
        return (
            <nav className="main">
                <div className="imglogo">
                </div>
                <ul>
                    <li><NavLink exact to="/" activeClassName="selected">INICIO</NavLink></li>
                    <li><NavLink exact to="rooms" activeClassName="selected">HABITACIONES</NavLink></li>
                    <li><NavLink exact to="photos" activeClassName="selected">FOTOS</NavLink></li>
                </ul>
            </nav>

        );
    }
}

export default Header;
