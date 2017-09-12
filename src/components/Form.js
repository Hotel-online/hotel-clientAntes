import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="imgbackground portada">
              <div className="reserva">
                <h2>REGISTRO</h2>
                  <input className="form2" type="text"  placeholder="Nombre"></input>
                  <input className="form2" type="text"  placeholder="Apellido"></input>
                  <input className="form2" type="text"  placeholder="DNI"></input>
                  <input className="form2" type="name"  placeholder="Usuario"></input>
                  <input className="form2" type="password"  placeholder="Contraseña"></input>
                  <input className="form2" type="email" placeholder="E-mail"></input>
                  <input className="form2btn"  type="button" name="aceptar" value="Aceptar"/>
              </div>

            </div>
        );
    }
}

export default Form;
