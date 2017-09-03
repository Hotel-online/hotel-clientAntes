import React, { Component } from 'react';
import {
    Switch,
    Route,
    NavLink
}from 'react-router-dom'

import './Header.css';
class Header extends Component {
    render() {
        return (
            <nav>
			<ul>
				<li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
                <li><NavLink exact to="/abouts" activeClassName="selected">Buscar cuarto</NavLink></li>
                <li><NavLink exact to="/one" activeClassName="selected">one</NavLink></li>
                <li><NavLink exact to="/counters" activeClassName="selected">Counter</NavLink></li>
                <li><NavLink exact to="/users" activeClassName="selected">users</NavLink></li>
			</ul>
		</nav>
        );
    }
}

export default Header;
