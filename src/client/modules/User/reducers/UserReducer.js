import {
  ADD_USER,
  CLEAR_DATA,
  EDIT_USER,
  GET_USER
} from "../constants/ActionTypes";

const UserReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [action.payload];
    // return [...state, action.payload];

    case CLEAR_DATA:
      return (state = []);

    case GET_USER:
      console.log("reducer");
      console.log(state);
      return state[0];

    case EDIT_USER:
      // return Object.assign({}, { user: action.payload });
      return [action.payload];

    default:
      return state;
  }
};

export default UserReducer;

// SAVE_USER,
//
// case SAVE_USER:
//   return Object.assign({}, state, {
//     state:state.filter(user => user.id !== action.id) }
//   );
