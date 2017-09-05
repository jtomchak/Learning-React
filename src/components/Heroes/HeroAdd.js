import React from "react";

//We gonna need a class here
class HeroAdd extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h2>Enter a GitHub username</h2>
        <form onSubmit={this.handleSubmit}>
          <input className="search-page__input" type="text" />
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default HeroAdd;
