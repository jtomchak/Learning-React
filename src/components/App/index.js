import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Heroes from "../Heroes";
import Dashboard from "../Dashboard";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Git Tour of Heroes</h1>
          <nav>
            <NavLink to="/" activeClassName="active">
              Dashboard
            </NavLink>
            <NavLink to="/heroes" activeClassName="active">
              Heroes
            </NavLink>
          </nav>
          <hr />
          <Route exact path="/" component={Dashboard} />
          <Route path="/heroes" component={Heroes} />
        </div>
      </Router>
    );
  }
}

export default App;
