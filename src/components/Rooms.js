import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import { connect } from 'react-redux'
import {  loadRooms } from '../actions/roomsAction';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};  

class Rooms extends Component {
    componentWillMount() {
        this.props.loadRooms()
    }


    render() {
        const {rooms} = this.props
        const classes = this.props.classes;

        return (

            <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            Habitacion Clasica
          </Typography>
          <Typography component="p">
            Precios
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            Share
          </Button>
          <Button dense color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
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
