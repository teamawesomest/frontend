import React, { useState } from "react";

import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import axios from "axios";

const Registration = ({ touched, errors }) => {
  return (
    <div>
      <h1>Registration</h1>
      <Form>
        <label>Username</label>
        <Field type="text" name="username" />
        <p>{touched.username && errors.username}</p>
        <label>Password</label>
        <Field type="text" name="password" />
        <p>{touched.password && errors.password}</p>
        <button type="submit">Register</button>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(4, "Username must be at least 4 characters")
      .required("Username required"),
    password: Yup.string()
      .min(4, "Password must be at least 4 characters")
      .required("Password required")
  }),

  handleSubmit(values, { props }) {
    const url = "https://cs-build-week-adventure-game.herokuapp.com/register";

    //formikBag.setSubmitting(true);
    axios
      .post(url, values)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/game");
      })
      .catch(e => {
        console.log("Danger Will Robinson", e);
      });
  }
})(Registration);
