import { useState, useEffect } from "react";
import Select from "@/components/shared/select";

const PokemonTypeFilter = () => {
  const [pokemonType, setPokemonType] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((res) => res.json())
      .then((res) => {
        setPokemonType(
          res.results.map(({ name }) => ({ label: name, value: name }))
        );
      });
  }, []);

  return <Select options={pokemonType} />;
};

export default PokemonTypeFilter;
