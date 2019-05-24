import React from "react";
import { connect } from "react-redux";

import User from "../components/User";
import { saveUserRequest } from "../actions/UserAction";

const UserList = props => {
  const { user, onSaveUser /*onEditUser, onDeleteUser */ } = props;

  if (!user.length) {
    return <div>No Users</div>;
  }
  return (
    <div>
      {user.map(user => (
        <User
          key={user.id}
          user={user}
          onSaveUser={onSaveUser}
          // onEditUser={onEditUser}
          // onDeleteUser={onDeleteUser}
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
  onSaveUser: user => dispatch(saveUserRequest(user))
  // onEditUser: user => dispatch(editUser(user))
  // onDeleteUser: id => dispatch(deleteUserRequest(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
