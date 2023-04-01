export const getPokemonIdForImage = (id) => id.toString().padStart(3, "0");

export const getPokemonId = (link) => {
  const finder = link.match(/[^\/]+(?=\/$|$)/);
  return getPokemonIdForImage(finder[0]);
};

export const getPokemonImage = (id) =>
  `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
