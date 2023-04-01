import { useState } from "react";
import { useRouter } from "next/router";
import PokemonDetail from "@/components/pokemon/detail";

export default function Home() {
  const router = useRouter();
  const { name } = router.query;
  return (
    <div className="page-container max-w-screen-lg m-auto h-screen">
      <PokemonDetail name={name} />
    </div>
  );
}
