import { REPLACE_ROOMS} from '../actions/roomsAction'

const initialState = {
	products: [],

};

const ecommReducers = (state = initialState, action) => {
	if (action.type === REPLACE_ROOMS) {
		return {
			...state,
			products: action.products
		};
	} 
	return state;
}


export default ecommReducers