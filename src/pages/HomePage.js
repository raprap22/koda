import React, { useState } from "react";
import PokemonList from "../components/PokemonList";
import '../App.css'

const HomePage = () => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <h1 className="title">Pokedex</h1>
      <PokemonList page={page} setPage={setPage} />
    </div>
  );
};

export default HomePage;
