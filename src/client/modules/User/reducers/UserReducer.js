import {
  ADD_USER,
  // GET_USER,
  EDIT_USER,
  DELETE_USER
  // FETCH_POST
} from "../constants/ActionTypes";

const UserReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];

    // case GET_USER:
    //   return state.filter(user => user._id === action.id);

    case EDIT_USER:
      return state.map(user => {
        return user.id === action.id
          ? Object.assign({}, user, action.user)
          : user;
      });

    case DELETE_USER:
      return state.filter(user => user._id !== action.payload.id);

    // case FETCH_USER:
    //   return action.users;

    default:
      return state;
  }
};

export default UserReducer;

// state.map((user)=>user.id === action.id ? {...user,editing:!user.editing}:user)

// case EDIT_USER:
//   return state.map(user => {
//     return user.id === action.id
//       ? Object.assign({}, user, action.user)
//       : user;
//   });
