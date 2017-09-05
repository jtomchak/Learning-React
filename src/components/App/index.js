import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Heroes from "../Heroes";
import Dashboard from "../Dashboard";
import HeroForm from "../Heroes/HeroForm";
import HeroAdd from "../Heroes/HeroAdd";

import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <h1>Git Tour of Heroes</h1>
          <nav>
            <NavLink exact to="/" activeClassName="active">
              Dashboard
            </NavLink>
            <NavLink exact to="/heroes" activeClassName="active">
              Heroes
            </NavLink>
            <NavLink to="/heroes/add" activeClassName="active">
              Add Hero
            </NavLink>
          </nav>
          <hr />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/heroes" component={Heroes} />
          <Route path="/heroes/add" component={HeroAdd} />
          <Route path={"/heroes/details/:heroid"} component={HeroForm} />
        </div>
      </Router>
    );
  }
}

export default App;
