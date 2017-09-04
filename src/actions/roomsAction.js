import axios from 'axios';
export const REPLACE_ROOMS = 'REPLACE_ROOMS';

const loadRooms = () => {
  return dispatch => {
    console.log("loadRooms");
    return axios.get("http://localhost:3000/products.json")
      .then(response => {
        console.log(response.data);
        dispatch({ type: REPLACE_ROOMS, rooms: response.data.rooms });
      });
  };
};

export { loadRooms };