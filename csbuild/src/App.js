import React from "react";
import "./App.css";
import "../src/components/GameContainer.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Credentials from "./components/Credentials";
import GameStuff from "./components/GameStuff";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Credentials} />
        <PrivateRoute exact path="/gamestuff" component={GameStuff} />
      </Router>
    </div>
  );
}

export default App;
