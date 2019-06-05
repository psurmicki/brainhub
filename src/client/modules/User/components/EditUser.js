import React, { Component } from "react";

import { connect } from "react-redux";
import { editUser } from "../actions/UserAction";

export class EditUser extends Component {
  constructor(props) {
    super(props);
    const { user, editorId } = props;
    const { id, name, surname, email, eventDate } = user.find(
      x => x.id === editorId
    );
    this.state = {
      id: id,
      name: name,
      surname: surname,
      email: email,
      eventDate: eventDate
    };
  }

  componentWillReceiveProps(props) {
    const { user, editorId } = props;
    const { id, name, surname, email, eventDate } = user.find(
      x => x.id === editorId
    );
    this.setState({
      id: id,
      name: name,
      surname: surname,
      email: email,
      eventDate: eventDate
    });
  }

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
    this.props.closeEditor();
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
                Clean Form
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.props.closeEditor}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

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
