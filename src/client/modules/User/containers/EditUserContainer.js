// import React, { Component } from "react";

// import { connect } from "react-redux";
// import { editUser } from "../actions/UserAction";
// import EditUser from "../components/EditUser";

// class EditUserContainer extends Component {

//   render() {
//     console.log("fsdfsdfsd");
//     console.log(this.state);
//     return (
//       <div>
//         <EditUser
//           id={this.state.id}
//           name={this.state.name}
//           surname={this.state.surname}
//           email={this.state.email}
//           eventDate={this.state.eventDate}
//         />
//       </div>
//     );
//   }
// }

// // export default EditUserContainer;
// // const EditUserContainer = props => {
// //   const { user } = props;
// //   console.log(props);
// //   return (
// //     <div>
// //       <EditUser
// //         id={user.id}
// //         name={user.name}
// //         surname={user.surname}
// //         email={user.email}
// //         eventDay={user.eventDay}
// //       />
// //     </div>
// //   );
// // };

// const mapStateToProps = state => ({
//   user: state.user
// });

// const mapDispatchToProps = dispatch => ({
//   onEditUser: user => dispatch(editUser(user))
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(EditUser, EditUserContainer);
