import { REPLACE_PRODUCTS} from '../actions/roomsAction'

const initialState = {
	products: [],

};

const ecommReducers = (state = initialState, action) => {
	if (action.type === REPLACE_PRODUCTS) {
		return {
			...state,
			products: action.products
		};
	} 
	return state;
}


export default ecommReducers