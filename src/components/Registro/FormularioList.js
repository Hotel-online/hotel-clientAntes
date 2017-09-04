import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import './FormularioList.css';

class FormularioList extends Component {
   render() {

        return (
            <CardContent>
                <Typography type="headline">

                <form onSubmit={this.props.onAddUser}>
                    <label className="cuerpo">
                    <div>
                     <Grid container >
            	<div className="texto">Nombres:</div>
                       <TextField
		          id="nombre"
		          label="Nombre"
		          type="text"
		          margin="normal"
		        	/>    
		        	 </Grid>                
                  </div>

                  <div>
                  <Grid container >
                    <div className="texto">Apellido Paterno:</div>
                       <TextField
		          id="appaterno"
		          label="Apellido Paterno"
		          type="text"		          
		          margin="normal"
		        	/> 
		</Grid> 
                    </div>

                  <div>
                  <Grid container >
                    <div className="texto">Apellido Materno:</div>
                    <TextField
		          id="apmaterno"
		          label="Apellido Materno"
		          type="text"
		          margin="normal"
		        	/>        
		 </Grid> 
                    </div>

                  <div>
                  <Grid container >
                  <div className="texto">Fecha Nacimiento:</div>
                    <TextField
	          id="date"
	          type="date"
	          defaultValue="dd-mm-aaaa"
	          margin="normal"
	          InputLabelProps={{
	            shrink: true,    }} />
	            </Grid> 
                    </div>


                  <div>
                  <Grid container >
                    <div className="texto">E-mail:</div>
                     <TextField
		          id="e-mail"
		          label="E-mail"
		          type="text"
		          autoComplete="current-password"
		          margin="normal"/>                      
		 </Grid> 
		</div>


                  <div>
                  <Grid container >
                    <div className="texto">Contraseña:</div>
                     <TextField
	          id="password"
	          label="Password"
	          type="password"
	          autoComplete="current-password"
	          margin="normal"/>                    
	          </Grid> 
	        </div>

                  <div>
                  <Grid container >
		<div className="texto">Rep Contraseña:</div>
		<TextField
	          id="password"
	          label="Password"
	          type="password"
	          autoComplete="current-password"
	          margin="normal" />
	          </Grid> 
	        </div>

		</label>
    <div className="boton">
      <Button raised color="primary" >        Cancelar      </Button>
      <Button raised color="accent" >        Aceptar      </Button>
    </div>

	</form>
	
          </Typography>
          </CardContent>

            
        );
    }
}

export default FormularioList;