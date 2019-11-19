import React, { useState } from "react";
//import { axiosWithAuth } from "./axiosWithAuth";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = ({ touched, errors, isSubmitting }) => {
  return (
    <Form>
      <div>
        <label>Name</label>
        <Field type="text" name="username" placeholder="Enter Name" />
        <p>{touched.name && errors.name}</p>
      </div>
      <div>
        <label>Password</label>
        <Field type="text" name="password" placeholder="Enter Password" />
        <p>{touched.password && errors.password}</p>
      </div>
      <button type="submit">Submit</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  handleSubmit({ values, resetForm, setErrors, setSubmitting, formikBag }) {
    axios
      .post("https://cs-build-week-adventure-game.herokuapp.com/login", values)
      .then(res => {
        localStorage.setItem(localStorage.getItem("token"), res.data.payload);
        this.props.history.push("/profile");
      })
      .catch(err => {
        console.log(err);
      });
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters long")
      .max(20)
      .required("Name is required"),
    password: Yup.string()
      .min(3, "Password must be at least 3 characters long")
      .max(20)
      .required("Password is required")
  })
})(Login);
