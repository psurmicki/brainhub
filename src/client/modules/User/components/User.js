import React from "react";
import "./User.css";

const User = props => {
  const { user, onSaveUser, onGetUser } = props;

  return (
    // console.log("user")
    // console.log(user)
    <div className="userDetail" key={user.id}>
      <h2>User Data: </h2>
      <p>Name: {user.name}</p>
      <p>Surname: {user.surname}</p>
      <p>Email: {user.email}</p>
      <p>Event Date: {user.eventDate}</p>
      <button onClick={() => onSaveUser(user)}>Save User</button>
      <button onClick={() => onGetUser(user)}>Edit User</button>
    </div>
  );
};

export default User;
