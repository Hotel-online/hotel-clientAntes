import React, { Component } from 'react';

import {
    Switch,
    Route,
    NavLink
}from 'react-router-dom'
import './style.css';
class Home extends Component {

    render() {
        return (
            <div className="imgbackground portada" >
              <h1>Reserve su cuarto facil y rapido</h1>
              <NavLink exact to="/abouts" activeClassName="selected"><input className="btn" type="submit" name="" value="RESERVE SU CUARTO"/></NavLink>

            </div>
        );
    }
}

export default Home;
