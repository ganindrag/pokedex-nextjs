import Filter from "@/components/filter";

const dummyPokemon = [];
for (var i = 1; i <= 28; i++) {
  dummyPokemon.push({
    name: `Pokemon ${i}`,
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  });
}

export default function Home() {
  return (
    <div className="page-container max-w-screen-lg m-auto">
      <Filter />
      <div className="pokemon-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {dummyPokemon.map((pokemon) => (
          <div className="pokemon-card">
            <div className="frame-image bg-gray-400">
              <img
                src={pokemon.image}
                className="w-full h-full object-contain object-center"
              />
            </div>
            {pokemon.name}
          </div>
        ))}
      </div>
    </div>
  );
}
