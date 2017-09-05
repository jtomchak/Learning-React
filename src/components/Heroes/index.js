import React, { Component } from "react";
import "./Hero.css";

import HeroForm from "./HeroForm";
import HeroList from "./HeroList";
import { getHeroes, getHeroesSlowly } from "../../services/hero.service";
import { Route, Link } from "react-router-dom";

const DEFAULT_NO_HERO = {
  name: "",
  id: undefined
};

class Heroes extends Component {
  constructor() {
    super();
    this.state = {
      heroes: [],
      selectedHero: DEFAULT_NO_HERO
    };

    //Binding is no longer inheriantly done with extends component
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectHero = this.selectHero.bind(this);
  }

  /*
  We need to now 'call' for our heros when this compoent is going to be mounted
  */
  componentWillMount() {
    getHeroesSlowly.then(payload => {
      this.setState({
        heroes: payload
      });
    });
  }
  /*
  capture the index of the selected hero for handleChange
  also if the id of hero param is the current selectedHero, reset it
  */
  selectHero(hero) {
    const heroIndex = this.state.heroes.map(o => o.id).indexOf(hero.id);
    hero = this.state.selectedHero.id !== hero.id ? hero : DEFAULT_NO_HERO;
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
      ],
      selectedHero: DEFAULT_NO_HERO
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <HeroList
          heroes={this.state.heroes}
          selectedHero={this.state.selectedHero}
          onHeroClick={this.selectHero}
        />
        {this.state.selectedHero.name && (
          <div>
            <h2>{this.state.selectedHero.name}</h2>
            <Link to={`/heroes/details/${this.state.selectedHero.id}`}>
              <button>Details</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Heroes;
