import axios from 'axios'
export const REPLACE_PRODUCTS = 'REPLACE_PRODUCTS'


const loadProducts = () => {
  return dispatch => {
    console.log("loadProducts");
    return axios.get("http://localhost:3000/rooms.json")
      .then(response => {
        console.log(response.data);
        dispatch({ type: REPLACE_PRODUCTS, products: response.data.rooms })
      });
  };
};


export { loadProducts}
