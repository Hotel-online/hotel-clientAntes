import {combineReducers} from 'redux'
import room from './roomsReducer'

var reducers = combineReducers({
   room: room,

});

export default reducers;