import { ADD_USER, CLEAR_DATA, EDIT_USER } from "../constants/ActionTypes";

const UserReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];

    case CLEAR_DATA:
      return (state = []);

    case EDIT_USER:
      const index = state.findIndex(x => x.id === action.payload.id);
      let data = [...state];
      data[index] = action.payload;
      return data;

    default:
      return state;
  }
};

export default UserReducer;
