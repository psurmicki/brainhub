import React, { Component /*, PropTypes*/ } from "react";

import { connect } from "react-redux";
import { editUser } from "../actions/UserAction";

class EditUser extends Component {
  state = {
    id: "",
    name: "",
    surname: "",
    email: "",
    eventDate: ""
  };

  componentWillReceiveProps() {
    // console.log("before");
    // console.log(this.props);
    if (this.props.user.length > 0) {
      const { id, name, surname, email, eventDate } = this.props.user[0];
      console.log("if");
      console.log(this.props.user);
      this.setState({
        id: id,
        name: name,
        surname: surname,
        email: email,
        eventDate: eventDate
      });
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("before");
  //   console.log(props);

  //   if (props.id !== state.id) {
  //     const { id, name, surname, email, eventDate } = this.props.user[0];
  //     return {
  //       id: id,
  //       name: name,
  //       surname: surname,
  //       email: email,
  //       eventDate: eventDate
  //     };
  //   }

  //   // Return null if the state hasn't changed
  //   return null;
  // }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { id, name, surname, email, eventDate } = this.state;
    this.props.onEditUser({ id, name, surname, email, eventDate });
    this.setState({ id, name, surname, email, eventDate });
    this.handleReset();
  };

  handleReset = () => {
    this.setState({
      id: "",
      name: "",
      surname: "",
      email: "",
      eventDate: ""
    });
  };

  render() {
    console.log("render");
    console.log(this.props);

    return (
      <div>
        <div key={this.state.id}>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                name="name"
                onChange={this.handleInputChange}
                value={this.state.name}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Surname"
                className="form-control"
                name="surname"
                onChange={this.handleInputChange}
                value={this.state.surname}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                name="email"
                onChange={this.handleInputChange}
                value={this.state.email}
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                className="form-control"
                name="eventDate"
                onChange={this.handleInputChange}
                value={this.state.eventDate}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Edit User
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={this.handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
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

// const { user: users } = this.props;
// return (
//   <div>
//     {users.map(user => (
//       <div key={user.id}>
//         <form onSubmit={this.handleFormSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               placeholder="Name"
//               className="form-control"
//               name="name"
//               onChange={this.handleInputChange}
//               value={user.name}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               // placeholder="Surname"
//               placeholder="Surname"
//               className="form-control"
//               name="surname"
//               onChange={this.handleInputChange}
//               value={user.surname}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               placeholder="Email"
//               className="form-control"
//               name="email"
//               onChange={this.handleInputChange}
//               value={user.email}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="date"
//               className="form-control"
//               name="eventDate"
//               onChange={this.handleInputChange}
//               value={user.eventDate}
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
//     ))}
