import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";
import "./PokemonCard/PokemonCard.css";

const PokemonList = ({ page, setPage }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState(10);

  const sizeLabel = [
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 30, label: "30" },
    { value: 40, label: "40" },
    { value: 50, label: "50" },
  ];

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${size}&offset=${
          (page - 1) * size
        }`
      );
      const data = await response.json();
      setPokemons(data.results);
      setLoading(false);
    };

    fetchPokemons();
  }, [page, size]);

  const handleSizeChange = (event) => {
    setSize(Number(event.target.value));
    setPage(1);
  };

  return (
    <>
      {loading ? (
        <h3 style={{ textAlign: "center" }}>Loading...</h3>
      ) : (
        <>
          <div className="pokemon-list">
            {pokemons.map((pokemon, index) => (
              <PokemonCard key={index} pokemon={pokemon} />
            ))}
          </div>
          <div className="size-selector">
            <label htmlFor="size">Select Size:</label>
            <select id="size" value={size} onChange={handleSizeChange}>
              {sizeLabel?.map((item) => (
                <option value={item?.value}>{item?.label}</option>
              ))}
            </select>
          </div>
          <Pagination page={page} setPage={setPage} />
        </>
      )}
    </>
  );
};

export default PokemonList;
