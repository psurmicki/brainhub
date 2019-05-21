import {
  ADD_USER,
  // GET_USER,
  EDIT_USER,
  // FETCH_USER,
  DELETE_USER
} from "../constants/ActionTypes";
import axios from "axios";
const apiUrl = "http://localhost:4000/user";

export const addUserRequest = ({ name, surname, email, eventDate }) => {
  return dispatch => {
    return axios
      .post(`${apiUrl}/add`, { name, surname, email, eventDate })
      .then(res => {
        dispatch(addUserSuccess(res.data));
      })
      .catch(err => {
        throw err;
      });
  };
};

export const addUserSuccess = data => {
  return {
    type: ADD_USER,
    payload: {
      _id: data._id,
      name: data.name,
      surname: data.surname,
      email: data.email,
      eventDate: data.eventDate
    }
  };
};

// export const getUserRequest = id => {
//   return dispatch => {
//     return axios
//       .get(`${apiUrl}/user/${id}`)
//       .then(res => {
//         dispatch(getUserSuccess(res.data));
//       })
//       .catch(err => {
//         throw err;
//       });
//   };
// };

// export const getUserSuccess = data => {
//   return {
//     type: GET_USER,
//     data
//   };
// };

export const editUserRequest = id => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/edit/${id}`)
      .then(res => {
        dispatch(editUserSuccess(res.data));
      })
      .catch(err => {
        throw err;
      });
  };
};

export const editUserSuccess = data => {
  return {
    type: EDIT_USER,
    payload: {
      _id: data._id,
      name: data.name,
      surname: data.surname,
      email: data.email,
      eventDate: data.eventDate
    }
  };
};

export const deleteUserRequest = id => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/delete/${id}`)
      .then(res => {
        dispatch(deleteUserSuccess(res.data));
      })
      .catch(err => {
        throw err;
      });
  };
};

export const deleteUserSuccess = id => {
  return {
    type: DELETE_USER,
    payload: {
      id
    }
  };
};

// export const fetchUserSuccess = users => {
//   return {
//     type: FETCH_USER,
//    users
//   };
// };

// export const fetchAllUsersRequest = () => {
//   return dispatch => {
//     return axios
//       .get(apiUrl)
//       .then(response => {
//         dispatch(fetchPosts(response.data));
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// };
