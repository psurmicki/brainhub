import { connect } from "react-redux";
import { editUserRequest } from "../actions/UserAction";
import EditUser from "../components/EditUser";

const mapDispatchToProps = dispatch => ({
  onEditUser: user => dispatch(editUserRequest(user))
});

export default connect(
  null,
  mapDispatchToProps
)(EditUser);
