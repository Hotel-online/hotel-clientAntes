import { REPLACE_ROOMS} from '../actions/roomsAction'

const initialState = {
	rooms: [],

};

const roomReducers = (state = initialState, action) => {
	if (action.type === REPLACE_ROOMS) {
		return {
			...state,
			rooms: action.rooms
		};
	} 
	return state;
}


export default roomReducers