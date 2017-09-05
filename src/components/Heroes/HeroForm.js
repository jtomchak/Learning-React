import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionsCreators } from "redux";
import { connect } from "react-redux";
import { getHeroById } from "../../services/hero.service";

class HeroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: this.props.hero
    };
  }

  //Object spread operator over hero object from state
  handleChange = event => {
    this.setState({
      hero: {
        ...this.state.hero,
        name: event.target.value
      }
    });
  };

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    const hero = this.state.hero;
    if (!hero) {
      return <div>Loading.......</div>;
    }
    return (
      <div>
        <div>
          <h2>{hero.name} details!</h2>
          <label>id: </label>
          {hero.id}
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>name: </label>
          <input type="text" value={hero.name} onChange={this.handleChange} />
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

HeroForm.propTypes = {};

//Get the hero id out of the props match url
//then find on the array of heros in state, and return the matched hero
const mapStatetoProps = (state, props) => {
  const heroId = parseInt(props.match.params.heroid);
  return {
    hero: state.heroes.find(hero => hero.id === heroId)
  };
};

export default connect(mapStatetoProps)(HeroForm);
