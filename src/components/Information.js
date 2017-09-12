import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link,
    NavLink
}from 'react-router-dom'

import "./style.css"
class Information extends Component {
    render() {
        return (
            <div >
               <div className="habitacion habitacion_info" >
                    <div className="img img_info">
                       <img  />
                    </div>
                    <div className="info_rooms">
                        <div className="info info_reserva">
                           <h3>
                              Habitacion doble
                           </h3>
                           <p>
                             S/50.soles
                           </p>
                           <p>
                              <NavLink exact to="/forms"  activeClassName="selected">Reservar</NavLink>
                           </p>
                        </div>
                   </div>
                </div>
            </div>
        );
    }
}

export default Information;