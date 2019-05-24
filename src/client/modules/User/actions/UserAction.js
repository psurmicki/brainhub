import {
  ADD_USER,
  SAVE_USER,
  EDIT_USER,
  GET_USER
  // DELETE_USER
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

//---------------------------------------------------------------------------
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

export const saveUserSuccess = data => {
  return {
    type: SAVE_USER,
    payload: {
      id: data.id
    }
  };
};

//--------------------------------------------------------------------
// Edit User
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

export const getUser = data => {
  return {
    type: GET_USER,
    payload: {
      id: data.id,
      name: data.name,
      surname: data.surname,
      email: data.email,
      eventDate: data.eventDate
    }
  };
};

// export const saveUserRequest = ({ name, surname, email, eventDate }) => {
//   return async () => {
//     try {
//       return axios.post(`${apiUrl}/save`, { name, surname, email, eventDate });
//     } catch (err) {
//       throw err;
//     }
//   };
// };
// export const saveUserRequest = ({ name, surname, email, eventDate }) => {
//   return dispatch => {
//     return (
//       axios
//         .post(`${apiUrl}/save`, { name, surname, email, eventDate })
// .then(res => {
//   dispatch(saveUserSuccess(res.data));
// })
//         .catch(err => {
//           throw err;
//         })
//     );
//   };
// };

// export const saveUserSuccess = data => {
//   return {
//     type: SAVE_USER,
//     payload: {
//       _id: data._id,
//       name: data.name,
//       surname: data.surname,
//       email: data.email,
//       eventDate: data.eventDate
//     }
//   };
// };

//-----------------------------------------------------------------
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

// export const editUserRequest = id => {
//   return dispatch => {
//     return axios
//       .get(`${apiUrl}/edit/${id}`)
//       .then(res => {
//         dispatch(editUserSuccess(res.data));
//       })
//       .catch(err => {
//         throw err;
//       });
//   };
// };

// export const editUserSuccess = data => {
//   return {
//     type: EDIT_USER,
//     payload: {
//       _id: data._id,
//       name: data.name,
//       surname: data.surname,
//       email: data.email,
//       eventDate: data.eventDate
//     }
//   };
// };

// export const deleteUserRequest = id => {
//   return dispatch => {
//     return axios
//       .get(`${apiUrl}/delete/${id}`)
//       .then(res => {
//         dispatch(deleteUserSuccess(res.data));
//       })
//       .catch(err => {
//         throw err;
//       });
//   };
// };

// export const deleteUserSuccess = id => {
//   return {
//     type: DELETE_USER,
//     payload: {
//       id
//     }
//   };
// };

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

// export const addUserRequest = ({ name, surname, email, eventDate }) => {
//   return dispatch => {
//     return axios
//       .post(`${apiUrl}/add`, { name, surname, email, eventDate })
//       .then(res => {
//         dispatch(saveUserSuccess(res.data));
//       })
//       .catch(err => {
//         throw err;
//       });
//   };
// };

// export const addUserSuccess = data => {
//   return {
//     type: SAVE_USER,
//     payload: {
//       _id: data._id,
//       name: data.name,
//       surname: data.surname,
//       email: data.email,
//       eventDate: data.eventDate
//     }
//   };
// };

//-----------------------------------------------------------------
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

// export const editUserRequest = id => {
//   return dispatch => {
//     return axios
//       .get(`${apiUrl}/edit/${id}`)
//       .then(res => {
//         dispatch(editUserSuccess(res.data));
//       })
//       .catch(err => {
//         throw err;
//       });
//   };
// };

// export const editUserSuccess = data => {
//   return {
//     type: EDIT_USER,
//     payload: {
//       _id: data._id,
//       name: data.name,
//       surname: data.surname,
//       email: data.email,
//       eventDate: data.eventDate
//     }
//   };
// };

// export const deleteUserRequest = id => {
//   return dispatch => {
//     return axios
//       .get(`${apiUrl}/delete/${id}`)
//       .then(res => {
//         dispatch(deleteUserSuccess(res.data));
//       })
//       .catch(err => {
//         throw err;
//       });
//   };
// };

// export const deleteUserSuccess = id => {
//   return {
//     type: DELETE_USER,
//     payload: {
//       id
//     }
//   };
// };

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
