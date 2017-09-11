import '../style.css';
import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link,
    NavLink

} from 'react-router-dom'

class Login extends Component {
    render() {
        return (
        	 <div className="Cuerpo_Principal" >
            <div className="formulario_lo">>
                <form className="cuerpoform">
                	<label className="texxto">Usuario</label>
                	<input type="email"/>
                	<label className="texxto">Contraseña</label>
		<input type="password"/>
		<a className="bot_ol" href="">Olvidaste tu Contraseña</a>
		<a className="boton_personalizado" id="bot3">Cancelar</a>
		<a className="boton_personalizado" id="bot2">Guardar</a>
		<a id="botonhref">Entrar con: <a href="www.facebook.com">Facebook</a>/  /<a href="www.google.com">Google</a></a>
               	<NavLink exact to="/forms"  activeClassName="selected"><input className="form btn"  type="submit" name="" value="Registrarse"/></NavLink>
                </form>
            </div>
           </div>
        );
    }
}

export default Login;