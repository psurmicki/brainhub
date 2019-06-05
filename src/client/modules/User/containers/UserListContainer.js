import React from "react";
import { connect } from "react-redux";

import User from "../components/User";
import { saveUserRequest } from "../actions/UserAction";

const UserListContainer = props => {
  const { user, onSaveUser, openEditor } = props;

  if (user.length < 1) {
    return <div>No Users</div>;
  }
  return (
    <div>
      {user.map(user => (
        <User
          openEditor={openEditor}
          key={user.id}
          user={user}
          onSaveUser={onSaveUser}
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer);
