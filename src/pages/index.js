import Filter from "@/components/filter";
import PokemonList from "@/components/pokemon/list";

export default function Home() {
  return (
    <div className="page-container max-w-screen-lg m-auto">
      <Filter />
      <PokemonList />
    </div>
  );
}
