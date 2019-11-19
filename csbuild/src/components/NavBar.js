import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <div>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/gamestuff">
          <button>Game Stuff</button>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
