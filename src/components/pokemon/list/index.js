import { useEffect, useState, useRef } from "react";
import useIntersection from "@/hooks/useIntersection";
import PokemonCard from "../card";
import { getPokemonId, getPokemonImage } from "@/utils/pokemon";

const pokemonPerPage = 20;

const fetchPokemonList = ({ limit, offset, type }) => {
  if (type !== "all") {
    return fetch(`https://pokeapi.co/api/v2/type/${type}`)
      .then((res) => res.json())
      .then((res) => {
        return res.pokemon.map(({ pokemon: { name, url } }) => ({
          name,
          image: getPokemonImage(getPokemonId(url)),
        }));
      });
  } else {
    return fetch(
      "https://pokeapi.co/api/v2/pokemon?" +
        new URLSearchParams({
          limit: limit,
          offset,
        })
    )
      .then((res) => res.json())
      .then((res) => {
        return res.results.map(({ name, url }) => ({
          name,
          image: getPokemonImage(getPokemonId(url)),
        }));
      });
  }
};

const PokemonList = ({ type }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setPokemon([]);
    setOffset(0);
  }, [type]);

  useEffect(() => {
    setIsLoading(true);
    fetchPokemonList({ limit: pokemonPerPage, offset, type }).then((res) => {
      setIsLoading(false);
      setPokemon((lastPokemon) => [
        ...(type === "all" ? lastPokemon : []),
        ...res,
      ]);
    });
  }, [offset, type]);

  const loadMoreRef = useRef();
  const isIntersecting = useIntersection(isLoading ? null : loadMoreRef);

  useEffect(() => {
    if (isIntersecting) setOffset((prevOffset) => prevOffset + pokemonPerPage);
  }, [isIntersecting, setOffset]);

  return (
    <div className="pokemon-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {pokemon.map((data) => (
        <PokemonCard name={data.name} image={data.image} key={data.name} />
      ))}
      {type === "all" && <div ref={loadMoreRef} />}
    </div>
  );
};

export default PokemonList;
