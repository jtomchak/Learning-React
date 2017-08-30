import React from "react";

const HeroForm = props => {
  return (
    <div>
      <div>
        <h2>
          {props.selectedHero.name} details!
        </h2>
        <label>id: </label>
        {props.selectedHero.id}
      </div>
      <form onSubmit={props.handleSubmit()}>
        <label>name: </label>
        <input
          type="text"
          value={props.selectedHero.name}
          onChange={props.handleChange()}
        />
        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HeroForm;
