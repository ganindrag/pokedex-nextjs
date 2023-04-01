import { useState, useEffect } from "react";
import Link from "next/link";
import Error from "next/error";
import { getPokemonIdForImage, getPokemonImage } from "@/utils/pokemon.js";
import { fetcherJson } from "@/utils/helper";

const PokemonDetail = ({ name }) => {
  const [error, setError] = useState(false);
  const [dataPokemon, setDataPokemon] = useState();

  useEffect(() => {
    if (!name) return;
    fetcherJson(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(({ id, types, height, weight }) => {
        setDataPokemon({
          height,
          weight,
          types: types.map((type) => type.type.name),
          image: getPokemonImage(getPokemonIdForImage(id)),
        });
        setError(false);
      })
      .catch((res) => setError(404));
  }, [name]);

  if (error) {
    return <Error statusCode={error} />;
  }

  if (!dataPokemon) {
    return "loading...";
  }

  return (
    <div className="">
      <Link href="/" className="text-center mt-10 p-3 bg-white text-lg shadow">
        &lt; Back
      </Link>
      <img src={dataPokemon.image} className="m-auto" width={300} />
      <h2 className="text-center text-2xl capitalize font-semibold">{name}</h2>
      <div className="w-1/3 grid grid-cols-2 mt-5 mx-auto">
        <div className="px-4 py-2 font-semibold">Type</div>
        <div className="px-4 py-2 capitalize">
          {dataPokemon.types.join(", ")}
        </div>
      </div>
      <div className="w-1/3 grid grid-cols-2 mt-5 mx-auto">
        <div className="px-4 py-2 font-semibold">Height</div>
        <div className="px-4 py-2">{dataPokemon.height} dm</div>
      </div>
      <div className="w-1/3 grid grid-cols-2 mt-5 mx-auto">
        <div className="px-4 py-2 font-semibold">Weight</div>
        <div className="px-4 py-2">{dataPokemon.weight} hg</div>
      </div>
    </div>
  );
};

export default PokemonDetail;
