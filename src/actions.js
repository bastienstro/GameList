export const fetchGames = async () => {
  const games = await fetch("games.json");

  return games.json();
};
