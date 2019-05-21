import React from "react";
import "./User.css";

const User = ({ user, onDeleteUser /*, onEditUser*/ }) => (
  <div className="userDetail">
    <h2>User Data: </h2>
    <p>Name: {user.name}</p>
    <p>Surname: {user.surname}</p>
    <p>Email: {user.email}</p>
    <p>Event Date: {user.eventDate}</p>
    <button onClick={() => onDeleteUser(user._id)}>
      Delete User from Database
    </button>
  </div>
);

export default User;

// <button onClick={() => onEditUser(user._id)}>Edit User Data</button>
