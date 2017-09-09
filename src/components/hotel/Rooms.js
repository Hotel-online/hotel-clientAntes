import React, { Component } from 'react';
import "./rooms.css"

class Rooms extends Component {
    render() {
        return (
            <div className="card">
                <img src="https://www.hotelsaratoga.com/.imaging/stk/hTtGeneric/bootstrapGalleryImageBig/dms/monoHotel-Hotel-Saratoga/habitaciones/Suite/habitacion-suite-cama/document/habitacion-suite-cama.jpg" />
                <div class="container">
                    <h4><b>habitaciones</b></h4>
                    <p>Mas Informacion</p>
                </div>
            </div>
        );
    }
}

export default Rooms;