import React, { Component } from "react";
// import User from "./client/modules/User/components/User";
import CreateNewUser from "./client/modules/User/containers/NewUserContainer";
import UserListContainer from "./client/modules/User/containers/UserListContainer";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CreateNewUser />
          </div>
          <div className="col-md-6">
            <UserListContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
