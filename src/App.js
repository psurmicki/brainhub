import React, { Component } from "react";

import CreateNewUser from "./client/modules/User/containers/NewUserContainer";
import EditUser from "./client/modules/User/components/EditUser";
import UserListContainer from "./client/modules/User/containers/UserListContainer";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export class App extends Component {
  state = {
    isEditorOpen: false,
    editorId: null
  };

  openEditor = userId => {
    this.setState({
      isEditorOpen: true,
      editorId: userId
    });
  };

  closeEditor = () => {
    this.setState({
      isEditorOpen: false
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CreateNewUser />
          </div>
          <div className="col-md-6">
            <UserListContainer openEditor={this.openEditor} />
          </div>
          {this.state.isEditorOpen && (
            <div>
              <EditUser
                closeEditor={this.closeEditor}
                editorId={this.state.editorId}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
