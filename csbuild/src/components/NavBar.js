import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavBar = props => {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    props.history.push("/login");
  };

  return (
    <>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        {localStorage.getItem("token") ? (
          <>
            <Link to="/gamestuff">
              <button>Game</button>
            </Link>
            <button onClick={logout}>Log Out</button>
          </>
        ) : (
          <Link to="/login">
            <button>Log In/Register</button>
          </Link>
        )}
      </nav>
    </>
  );
};

export default withRouter(NavBar);
