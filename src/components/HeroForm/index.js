import React, { Component } from "react";

class HeroForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h2>
            {this.props.selectedHero.name} details!
          </h2>
          <label>id: </label>
          {this.props.selectedHero.id}
        </div>
        <form onSubmit={this.props.handleSubmit()}>
          <label>name: </label>
          <input
            type="text"
            value={this.props.selectedHero.name}
            onChange={this.props.handleChange()}
          />
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default HeroForm;
