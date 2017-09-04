import React, { Component } from 'react'
import FormularioList from './Registro/FormularioList';
import UsuarioList from './Registro/UsuarioList';
import Grid from 'material-ui/Grid';
            
class Registro extends Component {
  render() {
    return (
      <div>
        <Grid container >
              
              <FormularioList /> 

              <UsuarioList/>

          </Grid>
      </div>
    );
  }
}

export default Registro;
