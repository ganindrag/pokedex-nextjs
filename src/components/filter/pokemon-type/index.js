import { useState, useEffect } from "react";
import Select from "@/components/shared/select";
import { fetcherJson } from "@/utils/helper";

const PokemonTypeFilter = ({ onChange }) => {
  const [pokemonType, setPokemonType] = useState([]);

  useEffect(() => {
    fetcherJson("https://pokeapi.co/api/v2/type").then((res) => {
      setPokemonType(
        res.results.map(({ name }) => ({ label: name, value: name }))
      );
    });
  }, []);

  return <Select options={pokemonType} onChange={onChange} />;
};

export default PokemonTypeFilter;
