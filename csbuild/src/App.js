import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Credentials from "./components/Credentials";
import GameStuff from "./components/GameStuff";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/login" component={Credentials} />
        <Route path="/gamestuff" component={GameStuff} />
      </Router>
    </div>
  );
}

export default App;
