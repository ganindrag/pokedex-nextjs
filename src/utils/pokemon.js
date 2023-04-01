import { fetcherJson } from "./helper";

export const getPokemonIdForImage = (id) => id.toString().padStart(3, "0");

export const getPokemonId = (link) => {
  const finder = link.match(/[^\/]+(?=\/$|$)/);
  return getPokemonIdForImage(finder[0]);
};

export const getPokemonImage = (id) =>
  `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;

export const fetchPokemonList = ({ limit, offset, type }) => {
  if (type !== "all") {
    return fetcherJson(`https://pokeapi.co/api/v2/type/${type}`).then((res) => {
      return res.pokemon.map(({ pokemon: { name, url } }) => ({
        name,
        image: getPokemonImage(getPokemonId(url)),
      }));
    });
  } else {
    return fetcherJson(
      "https://pokeapi.co/api/v2/pokemon?" +
        new URLSearchParams({
          limit: limit,
          offset,
        })
    ).then((res) => {
      return res.results.map(({ name, url }) => ({
        name,
        image: getPokemonImage(getPokemonId(url)),
      }));
    });
  }
};
