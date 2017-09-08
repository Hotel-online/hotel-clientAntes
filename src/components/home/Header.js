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
            <nav>
                <ul>
                    <li><NavLink exact to="/" activeClassName="selected">Inicio</NavLink></li>
                    <li><NavLink exact to="rooms" activeClassName="selected">Habitaciones</NavLink></li>
                    <li><NavLink exact to="photos" activeClassName="selected">Fotos</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Header;
