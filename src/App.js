/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import AddUser from "./AddUser";
import UserList from "./UserList";
import * as axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUser: null,
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
      .then((users) => this.setState({ users }))
      .catch((err) => console.log(err));
  }

  deleteUser = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => console.log(res));
  };

  render() {
    return (
      <div
        style={{ minHeight: "100vh" }}
        className="container-fluid d-flex flex-column p-5 bg-light justify-content-center align-items-center"
      >
        <h1>List of users</h1>
        <UserList
          deleteUser={this.deleteUser}
          users={this.state.users}
          selectedUser={(index) => this.setState({ selectedUser: index })}
        />
        <hr className="w-100 my-5" />
        <h1>Add users of the list</h1>
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
