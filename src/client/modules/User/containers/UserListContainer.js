import React from "react";
import { connect } from "react-redux";
import {
  deleteUserRequest
  // editUserRequest
  // getUserRequest
} from "../actions/UserAction";

import User from "../components/User";

const UserList = ({ user, onDeleteUser /*, onEditUser , onGetUser*/ }) => {
  if (!user.length) {
    return <div>No Users</div>;
  }
  return (
    <div>
      {user.map(user => (
        <User
          key={user._id}
          user={user}
          onDeleteUser={onDeleteUser}
          // onEditUser={onEditUser}
          // onGetUser={onGetUser}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteUser: id => dispatch(deleteUserRequest(id))
  // onEditUser: id => dispatch(editUserRequest(id))
  // onGetUser: id => dispatch(getUserRequest(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
