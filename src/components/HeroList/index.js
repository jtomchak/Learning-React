import React from "react";

const HeroList = props => {
  const handleSelectedHero = hero => {
    console.log(hero);
    props.onHeroClick(hero);
  };
  return (
    <ul className="heroes">
      {props.heroes.map(hero =>
        <li
          className={hero.id === props.selectedHero.id ? "selected" : ""}
          key={hero.id}
          onClick={() => props.onHeroClick(hero)}
        >
          <span className="badge">{hero.id}</span> {hero.name}
        </li>
      )}
    </ul>
  );
};

export default HeroList;
