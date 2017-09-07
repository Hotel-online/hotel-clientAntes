import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link,
    NavLink

} from 'react-router-dom'
import routes from '../routes'

class Header extends Component {
    render() {
        return (
            <div className="Footer">
                <ul>
                    <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
                    <li><NavLink exact to="rooms" activeClassName="selected">Habitaciones</NavLink></li>
                    <li><NavLink exact to="photos" activeClassName="selected">Fotos</NavLink></li>
                    <li><NavLink exact to="/abouts" activeClassName="selected">abouts</NavLink></li>
                    <li><NavLink exact to="/one" activeClassName="selected">one</NavLink></li>
                    <li><NavLink exact to="/counters" activeClassName="selected">Counter</NavLink></li>
                    <li><NavLink exact to="/users" activeClassName="selected">users</NavLink></li>
                    <li><NavLink exact to="/footer" activeClassName="selected">Footer</NavLink></li>

                </ul>
            </div>
        );
    }
}

export default Header;