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
    //Binding is no longer inheriantly done with extends component
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Object spread operator over hero object from state
  handleChange(event) {
    this.setState({
      hero: {
        ...this.state.hero,
        name: event.target.value
      }
    });
  }

  handleSubmit(event) {
    console.log("A name was submitted: " + this.state.hero);
    event.preventDefault();
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
          <form onSubmit={this.handleSubmit}>
            <label>name: </label>
            <input
              type="text"
              value={this.state.hero.name}
              onChange={this.handleChange}
            />
            <input className="button" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
