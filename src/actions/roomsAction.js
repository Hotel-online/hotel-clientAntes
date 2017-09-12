import axios from 'axios'
export const REPLACE_ROOMS = 'REPLACE_PRODUCTS'


const loadProducts = () => {
  return dispatch => {
    console.log("loadProducts");
    return axios.get("https://lp2-20172.github.io/hotel-client/rooms.json")
      .then(response => {
        console.log(response.data);
        dispatch({ type:REPLACE_ROOMS, products: response.data.rooms })
      });
  };
};


export { loadProducts}
