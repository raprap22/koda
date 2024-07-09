import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./PokemonDetail.css";

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setPokemon(data);
      setLoading(false);
    };

    fetchPokemon();
  }, [name]);

  return (
    <>
      {loading ? (
        <h3 style={{ textAlign: "center" }}>Loading...</h3>
      ) : (
        <div className="pokemon-detail">
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />

          <table>
            <tbody>
              <tr>
                <th>Type</th>
                {pokemon.types.map((type) => (
                  <td className="type-badge">
                    <span key={type.type.name}>{type.type.name}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <th>ID</th>
                <td>{pokemon.id}</td>
              </tr>
              <tr>
                <th>Height</th>
                <td>{pokemon.height}</td>
              </tr>
              <tr>
                <th>Weight</th>
                <td>{pokemon.weight}</td>
              </tr>
              <tr>
                <th>Base Experience</th>
                <td>{pokemon.base_experience}</td>
              </tr>
              <tr>
                <th>Abilities</th>
                <td>
                  {pokemon.abilities
                    .map((ability) => ability.ability.name)
                    .join(", ")}
                </td>
              </tr>
              <tr>
                <th>Moves</th>
                <td>
                  {pokemon.moves.map((move) => move.move.name).join(", ")}
                </td>
              </tr>
              <tr>
                <th>Forms</th>
                <td>{pokemon.forms.map((form) => form.name).join(", ")}</td>
              </tr>
              <tr>
                <th>Species</th>
                <td>{pokemon.species.name}</td>
              </tr>
              <tr>
                <th>Stats</th>
                <td>
                  <ul className="statistic-list">
                    {pokemon.stats.map((stat, index) => (
                      <li key={index}>
                        <span>{stat.stat.name}:</span> {stat.base_stat}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <Link to="/" className="back-button">
            Back
          </Link>
        </div>
      )}
    </>
  );
};

export default PokemonDetail;
