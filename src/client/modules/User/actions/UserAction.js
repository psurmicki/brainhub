import { ADD_USER, CLEAR_DATA, EDIT_USER } from "../constants/ActionTypes";
import axios from "axios";

const apiUrl = "http://localhost:4000/user";

// add user
export const addUser = data => {
  return {
    type: ADD_USER,
    payload: {
      id: data.id,
      name: data.name,
      surname: data.surname,
      email: data.email,
      eventDate: data.eventDate
    }
  };
};

// save user in DB
export const saveUserRequest = ({ name, surname, email, eventDate }) => {
  return dispatch => {
    return axios
      .post(`${apiUrl}/save`, { name, surname, email, eventDate })
      .then(res => {
        dispatch(saveUserSuccess(res.data));
      })
      .catch(err => {
        throw err;
      });
  };
};

// clear redux state
export const saveUserSuccess = data => {
  return {
    type: CLEAR_DATA,
    data
  };
};

// edit user
export const editUser = data => {
  return {
    type: EDIT_USER,
    payload: {
      id: data.id,
      name: data.name,
      surname: data.surname,
      email: data.email,
      eventDate: data.eventDate
    }
  };
};
