import { connect } from "react-redux";
import { addUserRequest } from "../actions/UserAction";
import NewUser from "../components/NewUser";

const mapDispatchToProps = dispatch => ({
  onAddUser: user => dispatch(addUserRequest(user))
});

export default connect(
  null,
  mapDispatchToProps
)(NewUser);
