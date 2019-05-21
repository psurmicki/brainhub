import React, { Component } from "react";

class NewUser extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    eventDate: ""
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { name, surname, email, eventDate } = this.state;
    // if (name.trim() && surname.trim() && email.trim() && eventDate.trim()) {
    this.props.onAddUser({ name, surname, email, eventDate });
    this.setState({ name, surname, email, eventDate });
    // this.handleReset();
    // }
  };

  handleReset = () => {
    this.setState({
      name: "",
      surname: "",
      email: "",
      eventDate: ""
    });
  };

  render() {
    const { name, surname, email, eventDate } = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              name="name"
              onChange={this.handleInputChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Surname"
              className="form-control"
              name="surname"
              onChange={this.handleInputChange}
              value={surname}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              name="email"
              onChange={this.handleInputChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              placeholder="Email"
              className="form-control"
              name="eventDate"
              onChange={this.handleInputChange}
              value={eventDate}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Add User
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
    );
  }
}

export default NewUser;
