import React, { Component } from 'react';
import {
    Switch,
    Route,
    NavLink
}from 'react-router-dom'
class About extends Component {
    render() {
        return (
            <div className="imgbackground buscador">
              <div className="form">
                <select className="input">
                  <option value="Categoria">Categoria</option>
                  <option value="Bajo">Bajo</option>
                  <option value="Medio">Medio</option>
                  <option value="Alta">Alta</option>

                </select>
                <select className="input">
                  <option value="Individual">Individual</option>
                  <option value="Familiar">Familiar</option>
                </select>
                <NavLink exact to="/Rooms" activeClassName="selected"><input className="input" type="submit" name="" value="BUSCAR"/></NavLink>

              </div>
              <div className="texth1">
                <h1>Te ayudamos a que pases una noche increible en nuestras fabulosas habitaciones</h1>
              </div>
            </div>
        );
    }
}

export default About;
