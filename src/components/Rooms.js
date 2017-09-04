import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';


import { connect } from 'react-redux'
import {  loadRooms } from '../actions/roomsAction';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
});

class Rooms extends Component {
    componentWillMount() {
        this.props.loadRooms()
    }


    render() {
        const {rooms} = this.props
        const classes = this.props.classes;

        return (

            <CardContent>
                <Typography type="headline">
                    Habitaciones
                </Typography>

                

            </CardContent>
        );
    }
}
Rooms.propTypes = {
    classes: PropTypes.object.isRequired,
    rooms: PropTypes.array
}

function mapStateToProps(state) {
    return {
        rooms: state.rooms
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadRooms: () => {
            dispatch(loadRooms());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Rooms))
