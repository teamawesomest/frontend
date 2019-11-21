import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";

const Credentials = props => {
  const [input, setInput] = useState({
    form: {
      username: "",
      password1: "",
      password2: ""
    }
  });

  const [login, setLogin] = useState(false);

  const toggle = () => {
    setLogin(!login);
  };

  const handleChanges = e => {
    setInput({
      form: {
        ...input.form,
        [e.target.name]: e.target.value
      }
    });
  };

  const registerUser = e => {
    // e.preventDefault()
    const newUser = {
      username: input.form.username,
      password1: input.form.password1,
      password2: input.form.password2
    };
    axios
      // .post('http://localhost:5000/api/register', newUser)
      .post(
        "https://cs-build-week-adventure-game.herokuapp.com/api/registration/",
        newUser
      )
      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.data.key);
        localStorage.setItem("username", input.form.username);
        props.history.push("/gamestuff");
      })
      .catch(error => {
        console.log(error);
      });
  };

  const loginUser = e => {
    axios

      .post("https://cs-build-week-adventure-game.herokuapp.com/api/login/", {
        username: input.form.username,
        password: input.form.password1
      })
      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.data.key);
        localStorage.setItem("username", input.form.username);
        props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (!login) {
    return (
      <div className="outer-container">
        <div className="Container">
          <div className="Login">
            <button disabled={true}>Login</button>
            <button onClick={toggle}>Register</button>
          </div>
          <Form>
            <Form.Field>
              <input
                placeholder="username"
                type="text"
                name="username"
                value={input.form.username}
                onChange={handleChanges}
              />
            </Form.Field>
            <Form.Field>
              <input
                placeholder="password"
                type="password"
                name="password1"
                value={input.form.password1}
                onChange={handleChanges}
              />
            </Form.Field>
            <Button type="submit" onClick={loginUser}>
              Login
            </Button>
          </Form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="outer-container">
        <div className="Container">
          <div className="Login">
            <button onClick={toggle}>Login</button>
            <button disabled={true}>Register</button>
          </div>
          <Form>
            <Form.Field>
              <input
                placeholder="username"
                type="text"
                name="username"
                value={input.form.username}
                onChange={handleChanges}
              />
            </Form.Field>
            <Form.Field>
              <input
                placeholder="password"
                type="password"
                name="password1"
                value={input.form.password1}
                onChange={handleChanges}
              />
            </Form.Field>
            <Form.Field>
              <input
                placeholder="confirm password"
                type="password"
                name="password2"
                value={input.form.password2}
                onChange={handleChanges}
              />
            </Form.Field>
            <Button type="submit" onClick={registerUser}>
              Register
            </Button>
          </Form>
        </div>
      </div>
    );
  }
};

export default Credentials;
