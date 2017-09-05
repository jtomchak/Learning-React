const initialState = [
  {
    id: 76360,
    name: "Jesse Tomchak",
    avatar_url: "https://avatars0.githubusercontent.com/u/76360?v=4",
    bio:
      "Firm believer that technology is awesome, the the ability to create and contribute to software is possible from anyone. "
  },
  {
    id: 150330,
    name: "Kyle Simpson",
    avatar_url: "https://avatars0.githubusercontent.com/u/150330?v=4",
    bio:
      "I teach JavaScript and I'd love to come help your team's developers. If that's interesting to you, please reach out to me getify@gmail.com."
  }
];

export default function heroes(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
