import React, { Component } from 'react';
import "./style.css"
class Information extends Component {
    render() {
        return (
            <div >
               <div className="habitacion" >
                    <div className="img">
                       <img  />
                    </div>
                    <div className="info_rooms">
                        <div className="info">
                           <h3>
                              
                           </h3>
                           <p>
                              S/ 
                           </p>
                        </div>
                        <div className="info info_color">
                           <h3>
                              Mas informacion
                           </h3>
                           <p>
                             Reservar
                          </p>
                      </div>
                   </div>
                </div>
            </div>
        );
    }
}

export default Information;