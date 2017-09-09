import React, { Component } from 'react';
import "./rooms.css"

class Rooms extends Component {
    render() {
        return (
            <div className="card">
                <section className="container">
                    <ul className="property-container">
                        <li className="property-boxes col-xs-6 col-md-4">
                            <div className="prp-img">
                                <img src="https://www.pioletspark.com/content/imgsxml/galerias/panel_habitaciones/6/tab-0016-pioletspark-doblepremium566.jpg" alt=""/>
                                <div className="price"><span>20</span></div>   
                            </div>
                            <div className="prp-detail">
                                <div className="title">
                                    HABITACION SIMPLE
                                </div>
                                <div className="description">
                                    Informacion
                                    <a className="more-detail btn colored" >
                                        Reservar
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        );
    }
}

export default Rooms;