import React, { Component } from "react";

import CreateNewUser from "./client/modules/User/containers/NewUserContainer";
import EditUser from "./client/modules/User/components/EditUser";
import UserListContainer from "./client/modules/User/containers/UserListContainer";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {
            <div className="col-md-6">
              <CreateNewUser />
            </div>
          }
          <div className="col-md-6">
            <UserListContainer />
          </div>
          <div>
            <EditUser />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
