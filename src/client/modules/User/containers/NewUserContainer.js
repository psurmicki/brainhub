import { connect } from "react-redux";
import { addUser } from "../actions/UserAction";
import NewUser from "../components/NewUser";

const mapDispatchToProps = dispatch => ({
  onAddUser: user => dispatch(addUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(NewUser);
