import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Tour of Git Heros",
      hero: {
        name: "Dan Abramov",
        id: 101
      }
    };
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.title}
        </h1>
        <h2>
          {this.state.hero.name} details!
        </h2>
        <div>
          <label>id: </label>
          {this.state.hero.id}
        </div>
        <div>
          <label>name: </label>
          {this.state.hero.name}
        </div>
      </div>
    );
  }
}

export default App;
