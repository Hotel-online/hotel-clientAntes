import React, { Component } from 'react';

class RecupPassword extends Component {
    render() {
        return (
            
	<div id="cuerpo1"><h1>Recuperar contraseña</h1>	
		<h3>Por favor, introduzca el nombre de usuario de la cuenta para recuperar su contraseña</h3>
		<form id="cuerpo2">
			<label className="texxto">ID de acceso:</label>
			<input type="email" placeholder="E-Mail"/>
			<label >¿Olvidó su nombre de usuario? Use su email</label>
		</form>
	</div>
        );
    }
}

export default RecupPassword;