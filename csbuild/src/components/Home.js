import React from "react";

const Home = () => {
  return (
    <div>
      {localStorage.getItem("token") ? (
        <h2>Welcome back, {localStorage.getItem("username")}</h2>
      ) : (
        <h2>Hello!</h2>
      )}
    </div>
  );
};

export default Home;
