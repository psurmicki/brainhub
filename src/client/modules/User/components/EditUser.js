import React, { Component /*, PropTypes*/ } from "react";

import { connect } from "react-redux";
import { editUser } from "../actions/UserAction";

class EditUser extends Component {
  // state = {
  //   id: "",
  //   name: "",
  //   surname: "",
  //   email: "",
  //   eventDate: ""
  // };
  // componentDidMount() {
  //   let id = this.props.user.id;
  //   let name = this.props.user.name;
  //   let surname = this.props.user.surname;
  //   let email = this.props.user.email;
  //   let eventDate = this.props.user.eventDate;
  //   this.setState({
  //     id: id,
  //     name: name,
  //     surname: surname,
  //     email: email,
  //     eventDate: eventDate
  //   });
  // }

  // handleInputChange = e => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  handleFormSubmit = e => {
    e.preventDefault();
    // const { id, name, surname, email, eventDate } = this.state;
    // this.props.onEditUser({ id, name, surname, email, eventDate });
    // this.setState({ name, surname, email, eventDate });
    // this.handleReset();
  };

  // handleReset = () => {
  //   this.setState({
  //     name: "",
  //     surname: "",
  //     email: "",
  //     eventDate: ""
  //   });
  // };

  render() {
    // const { name, surname, email, eventDate } = this.state;
    console.log(this.props);
    const { user } = this.props;
    return (
      <div>
        <p>{user.name}</p>
        {}
      </div>
      // <div>
      // <form onSubmit={this.handleFormSubmit}>
      //   <div className="form-group">
      //     <input
      //       type="text"
      //       placeholder="Name"
      //       className="form-control"
      //       name="name"
      //       // onChange={this.handleInputChange}
      //       value={user.name}
      //     />
      //   </div>
      //   <div className="form-group">
      //     <input
      //       type="text"
      //       placeholder="Surname"
      //       className="form-control"
      //       name="surname"
      //       // onChange={this.handleInputChange}
      //       value={user.surname}
      //     />
      //   </div>
      // <div className="form-group">
      //   <input
      //     type="email"
      //     placeholder="Email"
      //     className="form-control"
      //     name="email"
      //     // onChange={this.handleInputChange}
      //     value={user.email}
      //   />
      // </div>
      // <div className="form-group">
      //   <input
      //     type="date"
      //     className="form-control"
      //     name="eventDate"
      //     // onChange={this.handleInputChange}
      //     value={user.eventDate}
      //   />
      // </div>
      // <div className="form-group">
      //     <button type="submit" className="btn btn-primary">
      //       Edit User
      //     </button>
      //     <button
      //       type="button"
      //       className="btn btn-warning"
      //       //   onClick={this.handleReset}
      //     >
      //       Reset
      //     </button>
      //   </div>
      // </form>
      // </div>
    );
  }
}
// type="submit" className="btn btn-primary"
// EditUser.propTypes = {
//   user: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       surname: PropTypes.string.isRequired,
//       email: PropTypes.string.isRequired,
//       eventDate: PropTypes.string.isRequired
//     })
//   ).isRequired
// };

// export default EditUser;

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  onEditUser: user => dispatch(editUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser);

// import React, { Component /*, PropTypes*/ } from "react";

// import { connect } from "react-redux";
// import { editUser } from "../actions/UserAction";

// class EditUser extends Component {
// state = {
//   id: this.props.user.id,
//   name: this.props.user.name,
//   surname: this.props.user.surname,
//   email: this.props.user.email,
//   eventDate: this.props.user.eventDate
// };

//   handleInputChange = e => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = e => {
//     e.preventDefault();
//     const { id, name, surname, email, eventDate } = this.state;
//     this.props.onEditUser({ id, name, surname, email, eventDate });
//     this.setState({ name, surname, email, eventDate });
//     // this.handleReset();
//   };

//   // handleReset = () => {
//   //   this.setState({
//   //     name: "",
//   //     surname: "",
//   //     email: "",
//   //     eventDate: ""
//   //   });
//   // };

//   render() {
//     // const { name, surname, email, eventDate } = this.state;
//     console.log(this.state);
//     return (
//       <div>
//         <form onSubmit={this.handleFormSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               placeholder="Name"
//               className="form-control"
//               name="name"
//               onChange={this.handleInputChange}
//               value={this.props.user.name}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               placeholder="Surname"
//               className="form-control"
//               name="surname"
//               onChange={this.handleInputChange}
//               value={this.props.user.surname}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               placeholder="Email"
//               className="form-control"
//               name="email"
//               onChange={this.handleInputChange}
//               value={this.props.user.email}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="date"
//               className="form-control"
//               name="eventDate"
//               onChange={this.handleInputChange}
//               value={this.props.user.eventDate}
//             />
//           </div>
//           <div className="form-group">
//             <button type="submit" className="btn btn-primary">
//               Edit User
//             </button>
//             <button
//               type="button"
//               className="btn btn-warning"
//               onClick={this.handleReset}
//             >
//               Reset
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
// type="submit" className="btn btn-primary"
// EditUser.propTypes = {
//   user: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       surname: PropTypes.string.isRequired,
//       email: PropTypes.string.isRequired,
//       eventDate: PropTypes.string.isRequired
//     })
//   ).isRequired
// };

// export default EditUser;

// const mapStateToProps = state => ({
//   user: state.user
// });

// const mapDispatchToProps = dispatch => ({
//   onEditUser: user => dispatch(editUser(user))
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(EditUser);
