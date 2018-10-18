import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { fetchGames } from "./actions";

fetchGames().then(games => {
  ReactDOM.render(<App games={games.games} />, document.getElementById("root"));
});
