import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="imgbackground portada">
              <div className="reserva">
                <h2>RESERVA</h2>
                  <input className="form2" type="text"  placeholder="Nombre"></input>
                  <input className="form2" type="text"  placeholder="Apellido"></input>
                  <input className="form2" type="text"  placeholder="DNI"></input>
                  <input className="form2" type="date"  name="bday" min="2000-01-02"></input>
                  <input className="form2" type="date"  name="bday" min="2000-01-02"></input>
                  <input className="form2" type="email" placeholder="E-mail"></input>
                  <input className="form2btn"  type="button" name="aceptar" value="Aceptar"/>
              </div>

            </div>
        );
    }
}

export default Form;
