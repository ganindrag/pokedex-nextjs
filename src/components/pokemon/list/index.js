import { useEffect, useState, useRef } from "react";
import useIntersection from "@/hooks/useIntersection";

const getPokemonId = (link) => {
  const finder = link.match(/[^\/]+(?=\/$|$)/);
  return finder[0].padStart(3, "0");
};

const getPokemonImage = (id) =>
  `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;

const pokemonPerPage = 20;

const PokemonList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://pokeapi.co/api/v2/pokemon?" +
        new URLSearchParams({
          limit: pokemonPerPage,
          offset,
        })
    )
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false);
        setPokemon((lastPokemon) => [
          ...lastPokemon,
          ...res.results.map(({ name, url }) => ({
            name,
            image: getPokemonImage(getPokemonId(url)),
          })),
        ]);
      });
  }, [offset]);

  const loadMoreRef = useRef();
  const isIntersecting = useIntersection(isLoading ? null : loadMoreRef);

  useEffect(() => {
    if (isIntersecting) setOffset((prevOffset) => prevOffset + pokemonPerPage);
  }, [isIntersecting, setOffset]);

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
      <div ref={loadMoreRef} />
    </div>
  );
};

export default PokemonList;
