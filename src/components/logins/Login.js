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
        	 <div className="imgbackground" >
              <div className="formulario_lo">
                  <form className="cuerpoform">
                    	<label >Usuario</label>
                    	<input className="form form_login" type="email" placeholder="E-mail"/>
                    	<label >Contraseña</label>
                  		<input className="form form_login" type="password" placeholder="Password"/>
                  		<NavLink exact to="/bienvenidos"  activeClassName="selected"><input className=" form form_login btn"  type="submit" name="" value="Iniciar Sesión"/></NavLink>
                      <NavLink exact to="/forms"  activeClassName="selected"><input className="form form_login btn"  type="submit" name="" value="Registrarse"/></NavLink>
                      <a className="bot_ol" href="/recuppasswords">¿Has olvidado tu Contraseña?</a>

                  		<a id="botonhref">Entrar con: <a href="www.facebook.com">Facebook</a>/  /<a href="www.google.com">Google</a></a>


                  </form>
              </div>
           </div>
        );
    }
}

export default Login;
