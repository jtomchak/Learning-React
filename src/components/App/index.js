import React, { Component } from "react";
import Heroes from "../Heroes";

import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Heroes />
      </div>
    );
  }
}

export default App;
