import React, { Component } from "react";

import HeroForm from "../HeroForm";
import HeroList from "../HeroList";
import "./App.css";
const HEROES = [
  { id: 11, name: "Mr. Nice" },
  { id: 12, name: "Narco" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Celeritas" },
  { id: 15, name: "Magneta" },
  { id: 16, name: "RubberMan" },
  { id: 17, name: "Dynama" },
  { id: 18, name: "Dr IQ" },
  { id: 19, name: "Magma" },
  { id: 20, name: "Tornado" }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Tour of Git Heros",
      heroes: HEROES,
      selectedHero: {
        name: "",
        id: undefined
      }
    };

    //Binding is no longer inheriantly done with extends component
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectHero = this.selectHero.bind(this);
  }

  //capture the index of the selected hero for handleChange
  selectHero(hero) {
    const heroIndex = this.state.heroes.map(o => o.id).indexOf(hero.id);
    this.setState({
      selectedHero: {
        ...hero,
        index: heroIndex
      }
    });
  }

  //Object spread operator over hero object from state
  handleChange(event) {
    this.setState({
      selectedHero: {
        ...this.state.selectedHero,
        name: event.target.value
      }
    });
  }

  handleSubmit(event) {
    //Sweet mother of mary!! what is going on here ?!?!
    //So much to keep it from mutating
    this.setState({
      heroes: [
        ...this.state.heroes.slice(0, this.state.selectedHero.index),
        { id: this.state.selectedHero.id, name: this.state.selectedHero.name },
        ...this.state.heroes.slice(
          this.state.selectedHero.index + 1,
          this.state.heroes.length
        )
      ]
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.title}
        </h1>
        <HeroList
          heroes={this.state.heroes}
          selectedHero={this.state.selectedHero}
          onHeroClick={this.selectHero}
        />
        <HeroForm
          selectedHero={this.state.selectedHero}
          handleChange={() => this.handleChange}
          handleSubmit={() => this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
