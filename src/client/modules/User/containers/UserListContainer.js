import React from "react";
import { connect } from "react-redux";

import User from "../components/User";
import { saveUserRequest, getUser } from "../actions/UserAction";

const UserListContainer = props => {
  const { user, onSaveUser, onGetUser } = props;

  // if (!user.length) {
  //   return <div>No Users</div>;
  // }
  console.log("userList");
  console.log(props);
  return (
    <div>
      <User
        key={user.id}
        user={user}
        onSaveUser={onSaveUser}
        onGetUser={onGetUser}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  onSaveUser: user => dispatch(saveUserRequest(user)),
  onGetUser: user => dispatch(getUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer);
