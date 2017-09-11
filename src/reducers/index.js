import {combineReducers} from 'redux'
import ecomm from './roomsReducer'

var reducers = combineReducers({
   ecomm: ecomm,

});

export default reducers;