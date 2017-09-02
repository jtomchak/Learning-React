import React, { Component } from "react";
import PropTypes from "prop-types";
import { getHeroById } from "../../services/hero.service";

class HeroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroId: parseInt(props.match.params.heroid)
    };
  }

  componentWillMount() {
    getHeroById(this.state.heroId).then(payload => {
      console.log(payload);
      this.setState({
        hero: payload
      });
    });
  }

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
          <input
            type="text"
            value={hero.name}
            onChange={this.props.handleChange}
          />
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

HeroForm.propTypes = {};

export default HeroForm;
