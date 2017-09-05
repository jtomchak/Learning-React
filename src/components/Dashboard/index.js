import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionsCreators } from "redux";
import { connect } from "react-redux";

import "./Dashboard.css";
import HeroDetails from "../Heroes/HeroForm";
import { getHeroes, getHeroesSlowly } from "../../services/hero.service";

class Dashboard extends Component {
  render() {
    const heroBlocks = this.props.heroes.map(hero => (
      <Link key={hero.id} className="col-1-4" to={`heroes/details/${hero.id}`}>
        <div className="module hero">
          <h4>{hero.name}</h4>
        </div>
      </Link>
    ));
    return (
      <div>
        <h3>Top Heroes</h3>
        <div className="grid grid-pad">{heroBlocks}</div>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  heroes: state.heroes
});

export default connect(mapStatetoProps)(Dashboard);
