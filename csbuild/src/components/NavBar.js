import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavBar = props => {
  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/login");
  };

  // let hasToken = false;
  // localStorage.getItem("token") != null
  //   ? (hasToken = true)
  //   : (hasToken = false);

  console.log("NavBar.props: ", props);

  return (
    <div>
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

        {/* <Link to="/gamestuff">
          <button disabled={localStorage.getItem("token") ? false : true}>
            Game
          </button>
        </Link> */}
        {/* <button onClick={logout}>temp logout</button> */}
      </nav>
    </div>
  );
};

export default withRouter(NavBar);
