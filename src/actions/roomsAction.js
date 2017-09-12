import axios from 'axios'
export const REPLACE_ROOMS = 'REPLACE_ROOMS'


const loadRooms = () => {
  return dispatch => {
    return axios.get("http://localhost:3000/rooms.json")
      .then(response => {
        dispatch({ type: REPLACE_ROOMS, rooms: response.data.rooms })
      });
  };
};


export { loadRooms}