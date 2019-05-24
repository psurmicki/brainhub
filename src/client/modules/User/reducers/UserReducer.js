import {
  ADD_USER,
  SAVE_USER,
  EDIT_USER,
  GET_USER
  // DELETE_USER,
} from "../constants/ActionTypes";

const UserReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [action.payload, ...state];

    case SAVE_USER:
      return Object.assign({}, state, {
        state: state.filter(user => user.id !== action.id)
      });

    case EDIT_USER:
      return state.map(user => {
        return user.id === action.id
          ? Object.assign({}, user, action.user)
          : user;
      });

    case GET_USER:
      return state.filter(user => user.id === action.id);

    // case EDIT_USER:
    //   return state.map(user => {
    //     return user.id === action.id
    //       ? Object.assign({}, user, action.user)
    //       : user;
    //   });

    // case DELETE_USER:
    //   return state.filter(user => user._id !== action.payload.id);

    default:
      return state;
  }
};

export default UserReducer;
