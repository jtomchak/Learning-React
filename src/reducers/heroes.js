import * as types from "../constants/ActionTypes";

const initialState = [
  {
    id: 76360,
    name: "Jesse Tomchak",
    avatar_url: "https://avatars0.githubusercontent.com/u/76360?v=4",
    bio:
      "Firm believer that technology is awesome, the the ability to create and contribute to software is possible from anyone. "
  }
];

export default function heroes(state = initialState, action) {
  switch (action.type) {
    case types.ADD_HERO:
      //CHeck for duplicates by id
      if (state.some(o => o.id === action.hero.id)) return state;
      return [
        ...state,
        {
          id: action.hero.id,
          name: action.hero.name,
          avatar_url: action.hero.avatar_url,
          bio: action.hero.bio
        }
      ];
    case types.SAVE_HERO:
      console.log(action);
      const heroIndex = state.map(x => x.id).indexOf(action.id);
      return [
        ...state.slice(0, heroIndex),
        { ...state[heroIndex], name: action.name },
        ...state.slice(heroIndex + 1, state.length)
      ];
    default:
      return state;
  }
}
