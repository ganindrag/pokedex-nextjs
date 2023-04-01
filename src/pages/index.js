import { useState } from "react";
import Filter from "@/components/filter";
import PokemonList from "@/components/pokemon/list";

export default function Home() {
  const [typeFilter, setTypeFilter] = useState("all");
  return (
    <div className="page-container max-w-screen-lg m-auto">
      <Filter setTypeFilter={setTypeFilter} />
      <PokemonList type={typeFilter} />
    </div>
  );
}
