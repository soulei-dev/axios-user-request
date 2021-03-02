import React, { Component } from "react";
import { Formik, Field } from "formik";
import * as axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component {
  getInitialValues = () => {
    return this.props.user
      ? { ...this.props.user }
      : { name: "", username: "", email: "" };
  };

  submit = (values, actions) => {
    if (!this.props.user) {
      axios
        .post("https://jsonplaceholder.typicode.com/users", values)
        .then((res) => {
          console.log(res);
        });
    } else {
      axios
      .put(`https://jsonplaceholder.typicode.com/users/${values.id}`, values)
      .then((res) => {
        console.log(res);
      });
    }
  };

  render() {
    return (
      <Formik
        initialValues={this.getInitialValues()}
        onSubmit={this.submit}
        enableReinitialize={true}
      >
        {({ handleSubmit }) => (
          <div className="container-fluid p-5 bg-ligth d-flex flex-column justify-content-center align-items-center">
            <form
              onSubmit={handleSubmit}
              className="d-flex flex-column bg-white border p-3 flex-column"
            >
              <div className="form-group">
                <label>Name</label>
                <Field name="name" className="form-control" />
              </div>
              <div className="form-group">
                <label>Username</label>
                <Field name="username" className="form-control" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <Field name="email" className="form-control" />
              </div>
              <button type="submit" className="btn btn-dark">
                Save
              </button>
            </form>
          </div>
        )}
      </Formik>
    );
  }
}
