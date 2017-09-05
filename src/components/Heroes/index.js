import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Hero.css";
import HeroList from "./HeroList";
import { getHeroesSlowly } from "../../services/hero.service";

const DEFAULT_NO_HERO = {
  name: "",
  id: undefined
};

class Heroes extends Component {
  constructor() {
    super();
    this.state = {
      selectedHero: DEFAULT_NO_HERO
    };

    //Binding is no longer inheriantly done with extends component
    this.selectHero = this.selectHero.bind(this);
  }

  /*
  capture the index of the selected hero for handleChange
  also if the id of hero param is the current selectedHero, reset it
  */
  selectHero(hero) {
    const heroIndex = this.props.heroes.map(o => o.id).indexOf(hero.id);
    hero = this.state.selectedHero.id !== hero.id ? hero : DEFAULT_NO_HERO;
    this.setState({
      selectedHero: {
        ...hero,
        index: heroIndex
      }
    });
  }

  render() {
    return (
      <div>
        <HeroList
          heroes={this.props.heroes}
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

const mapStatetoProps = state => ({
  heroes: state.heroes
});

export default connect(mapStatetoProps)(Heroes);
