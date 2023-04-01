import PokemonTypeFilter from "./pokemon-type";

const Filter = ({ setTypeFilter }) => {
  return (
    <div className="filter p-1">
      Type:{" "}
      <PokemonTypeFilter
        onChange={({ target }) => setTypeFilter(target.value)}
      />
    </div>
  );
};

export default Filter;
