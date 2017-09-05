import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { saveHero } from "../../actions/index";

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

  onSubmit = event => {
    event.preventDefault();
    this.props.onSave(this.state.hero.id, this.state.hero.name);
    this.props.history.goBack();
  };

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
        <form onSubmit={this.onSubmit}>
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

const mapDispatchToProps = dispatch => ({
  onSave: bindActionCreators(saveHero, dispatch)
});

export default connect(mapStatetoProps, mapDispatchToProps)(HeroForm);
