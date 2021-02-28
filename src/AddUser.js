import React, { Component } from "react";
import { Formik, Field } from "formik";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component {
  getInitialValues = () => {
    return this.props.user
      ? { ...this.props.user }
      : { name: "", username: "", email: "" };
  };

  submit = (values, actions) => {
    console.log(values);
  };

  render() {
    return (
      <Formik
        initialValues={this.getInitialValues}
        onSubmit={this.submit}
        enableReinitialize={true}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="d-flex flex-column">
            <Field name="name" placeholder="name" />
            <Field name="username" placeholder="username" />
            <Field name="email" placeholder="email" />
            <button type="submit">Save</button>
          </form>
        )}
      </Formik>
    );
  }
}
