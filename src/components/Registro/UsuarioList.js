	import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';


class UsuarioList extends Component {
   render() {
        return (
            <CardContent>
                
                <Typography type="subheading" color="secondary">
                
                <p><strong>Añade usuarios</strong></p>
                
                <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell >Nombre</TableCell>
                                    <TableCell >Apellido p</TableCell>
                                    <TableCell >Apellido M</TableCell>
                                    <TableCell >Email</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                    <TableRow>
                                        <TableCell ></TableCell>                                        
                                    </TableRow>
                                
                            </TableBody>
                        </Table>
                    </Paper>

                </Typography>
            </CardContent>
        );
    }
}
export default UsuarioList;