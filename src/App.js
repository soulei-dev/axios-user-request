/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import AddUser from "./AddUser";
import UserList from "./UserList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUser: null,
    };
  }

  render() {
    return (
      <div
        style={{ height: "100vh" }}
        className="container-fluid d-flex flex-column p-5 bg-light justify-content-center align-items-center"
      >
        <UserList
          users={this.state.users}
          selectedUser={(index) => this.setState({ selectedUser: index })}
        />
        <hr className="w-100 my-5" />
        <AddUser
          user={
            this.state.users && this.state.users[this.state.selectedUser]
              ? this.state.users[this.state.selectedUser]
              : null
          }
        />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
