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

class FormularioList extends Component {
   render() {

        return (
            <CardContent>
                <Typography type="headline">

                <form onSubmit={this.props.onAddUser}>
                    <label>
                    <div>
                    
            	Nombre:
                       <TextField
		          id="nombre"
		          label="Nombre"
		          type="text"
		          margin="normal"
		        	/>                    
                  </div>

                  <div>
                    Apellido Paterno:
                       <TextField
		          id="appaterno"
		          label="Apellido Paterno"
		          type="text"		          
		          margin="normal"
		        	/> 
                    </div>

                  <div>
                    Apellido Materno:
                    <TextField
		          id="apmaterno"
		          label="Apellido Materno"
		          type="text"
		          margin="normal"
		        	/>        
                    </div>

                  <div>
                  Fecha Nacimiento:
                    <TextField
	          id="date"
	          type="date"
	          defaultValue="dd-mm-aaaa"
	          margin="normal"
	          InputLabelProps={{
	            shrink: true,
	          }}
	        />
                    </div>


                  <div>
                    E-mail:
                     <TextField
		          id="e-mail"
		          label="E-mail"
		          type="text"
		          autoComplete="current-password"
		          margin="normal"
		        	/>                      
		</div>


                  <div>
                    Contraseña:
                     <TextField
	          id="password"
	          label="Password"
	          type="password"
	          autoComplete="current-password"
	          margin="normal"
	        />                    
	        </div>

                  <div>
		Rep Contraseña:				
		<TextField
	          id="password"
	          label="Password"
	          type="password"
	          autoComplete="current-password"
	          margin="normal"
	        />
	        </div>

		</label>
    <div>
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