import React, { Component } from 'react';
import Hom from './home/Hom';
import {
    Switch,
    Route,
    Link,
    NavLink

} from 'react-router-dom'
import './style.css';
class Home extends Component {

    render() {
        return (
          <div className="imgbackground portada" >
          <NavLink exact to="/abouts" activeClassName="selected"><input className="btn" type="submit" name="" value="RESERVE SU CUARTO"/></NavLink>
            <h1>Reserve su cuarto facil y rapido</h1>


          </div>
        );
    }
}

export default Home;
