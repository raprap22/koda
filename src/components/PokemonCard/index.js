import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      setLoading(true);
      const response = await fetch(pokemon.url);
      const data = await response.json();
      setPokemonDetail(data);
      setLoading(false);
    };

    fetchPokemonDetail();
  }, [pokemon]);

  const handleClick = () => {
    navigate(`/pokemon/${pokemonDetail?.name}`);
  };

  return (
    <div className="pokemon-card" onClick={handleClick}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3>{pokemonDetail?.name}</h3>
          <div className="pokemon-details">
            <img
              src={pokemonDetail?.sprites?.front_default}
              alt={pokemonDetail?.name}
              className="pokemon-image"
            />
            <div className="pokemon-types">
              {pokemonDetail?.types.map((type, index) => (
                <span key={index} className="pokemon-type">
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonCard;
