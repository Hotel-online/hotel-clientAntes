import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import { getList } from '../actions/userAction'
import { connect } from 'react-redux'

class roomList extends Component {
    componentWillMount() {
        this.props.getList("")
    }

    render() {


        return (

            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                            R
                            </Avatar>
                    }
                    title="Room List"
                    subheader="Room list"
                />

                <CardContent>

                    <TextField
                        id="search"
                        label="Search"
                        margin="normal"
                    />

                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                  <TableCell>#</TableCell>
                                  <TableCell>Nro de habitacion</TableCell>
                                  <TableCell>Tipo</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                    <TableRow>
                                        <TableCell >1</TableCell>
                                        <TableCell >125</TableCell>
                                        <TableCell >Familiar</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >2</TableCell>
                                        <TableCell >45</TableCell>
                                        <TableCell >Familiar</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >3</TableCell>
                                        <TableCell >67</TableCell>
                                        <TableCell >Individual</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >4</TableCell>
                                        <TableCell >157</TableCell>
                                        <TableCell >Familiar</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >5</TableCell>
                                        <TableCell >289</TableCell>
                                        <TableCell >Individual</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >6</TableCell>
                                        <TableCell >100</TableCell>
                                        <TableCell >Individual</TableCell>
                                    </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                </CardContent>

            </Card>
        );
    }
}
roomList.propTypes = {
    list: PropTypes.array
}

function mapStateToProps(state) {
    return {
        list: state.user.list
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getList: (q) => { dispatch(getList(q)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(roomList)
