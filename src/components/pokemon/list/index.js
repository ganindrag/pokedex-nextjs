import { useEffect, useState } from "react";

const getPokemonId = (link) => {
  const finder = link.match(/[^\/]+(?=\/$|$)/);
  return finder[0].padStart(3, "0");
};

const getPokemonImage = (id) =>
  `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((res) => {
        setPokemon(
          res.results.map(({ name, url }) => ({
            name,
            image: getPokemonImage(getPokemonId(url)),
          }))
        );
      });
  }, []);

  return (
    <div className="pokemon-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {pokemon.map((data) => (
        <div className="pokemon-card">
          <div className="frame-image bg-gray-400">
            <img
              src={data.image}
              className="w-full h-full object-contain object-center"
            />
          </div>
          <div className="p-1">{data.name}</div>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
