import {
  ADD_USER,
  CLEAR_DATA,
  EDIT_USER,
  GET_USER
} from "../constants/ActionTypes";

const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER:
      console.log("ADD_USER");
      console.log(action.payload);

      // state = action.payload;
      return action.payload;
    // return [...state, action.payload];

    case CLEAR_DATA:
      return (state = {});

    case GET_USER:
      console.log("GET_USER");
      console.log(state);
      console.log("GET_USER");
      return state;

    case EDIT_USER:
      console.log("EDIT_USER");
      console.log(action.payload);
      console.log(state);
      // return Object.assign({}, { user: action.payload });

      return action.payload;

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
