import {combineReducers} from 'redux'

import counterReducer from './counterReducer'
import user from './userReducer'
import ecomm from './roomsReducer'


var reducers = combineReducers({
    counter: counterReducer,
    user: user,
    ecomm: ecomm,

});

export default reducers;