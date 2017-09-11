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
		<a className="bot_ol" href="/recuppasswords">¿Has olvidado tu Contraseña?</a>
		<NavLink exact to="/bienvenidos"  activeClassName="selected">
               	<input className=" form2 btn"  type="submit" name="" value="Iniciar Sesión"/></NavLink>
		<a id="botonhref">Entrar con: <a href="www.facebook.com">Facebook</a>/  /<a href="www.google.com">Google</a></a>
               	<NavLink exact to="/forms"  activeClassName="selected">
               	<input className="form2 btn"  type="submit" name="" value="Registrarse"/></NavLink>
                </form>
            </div>
           </div>
        );
    }
}

export default Login;