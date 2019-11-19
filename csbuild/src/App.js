import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Registration} />
      </Router>
    </div>
  );
}

export default App;
