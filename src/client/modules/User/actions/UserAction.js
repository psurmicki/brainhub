import {
  ADD_USER,
  CLEAR_DATA,
  EDIT_USER,
  GET_USER
} from "../constants/ActionTypes";
import axios from "axios";

const apiUrl = "http://localhost:4000/user";

// add User
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

// save User in DB
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

// Get User
export const getUser = data => {
  return {
    type: GET_USER,
    data
  };
};

// Edit User
export const editUser = data => {
  console.log("editUser");
  console.log(data);
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
