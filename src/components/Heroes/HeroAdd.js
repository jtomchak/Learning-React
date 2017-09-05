import React from "react";
import { fetchGitHero } from "../../services/hero.service";

//We gonna need a class here
class HeroAdd extends React.Component {
  state = {
    hero: undefined,
    error: undefined
  };
  handleSubmit = e => {
    e.preventDefault();
    fetchGitHero(this.refs.userInput.value)
      .then(user => {
        console.log(user);
        this.setState({
          hero: user,
          error: undefined
        });
      })
      .catch(err => {
        this.setState({
          hero: undefined,
          error: err.message
        });
      });
  };

  render() {
    const hero = this.state.hero;
    return (
      <div>
        <h2>Enter a GitHub username</h2>
        <form onSubmit={this.handleSubmit}>
          <input ref="userInput" className="search-page__input" type="text" />
          <input className="button" type="submit" value="Search" />
        </form>
        {this.state.hero && (
          <div>
            <h2>{hero.name} details!</h2>
            <label>id: </label>
            {hero.id} <br />
            <label> Bio: </label>
            {hero.bio}
          </div>
        )}
        {this.state.error && (
          <div>
            <h2>
              {"\u2639"}
              {this.state.error}
            </h2>
          </div>
        )}
      </div>
    );
  }
}

export default HeroAdd;
