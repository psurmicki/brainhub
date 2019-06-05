import React from "react";
import "./User.css";

export const User = props => {
  const { user, onSaveUser, openEditor } = props;

  return (
    <div className="userDetail" key={user.id}>
      <h2>User Data: </h2>
      <p>Name: {user.name}</p>
      <p>Surname: {user.surname}</p>
      <p>Email: {user.email}</p>
      <p>Event Date: {user.eventDate}</p>
      <button className="btn btn-success" onClick={() => onSaveUser(user)}>
        Save User
      </button>
      <button className="btn btn-warning" onClick={() => openEditor(user.id)}>
        Edit User
      </button>
    </div>
  );
};

export default User;
