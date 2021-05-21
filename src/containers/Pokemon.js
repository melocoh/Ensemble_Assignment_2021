import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../actions/Actions";
import _ from "lodash";

/**
 * A component that produces information for a single pokemon
 */
const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);

  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** A function that displays the pokemon's description and sprites */
  const showData = () => {
    // maps data and outputs text and sprites if data exists
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      return (
        <div className={"pokemon-wrapper"}>
          <div className={"item"}>
            <h1>Sprites</h1>
            <img src={pokeData.sprites.front_default} alt="" />
            <img src={pokeData.sprites.back_default} alt="" />
            <img src={pokeData.sprites.front_shiny} alt="" />
            <img src={pokeData.sprites.back_shiny} alt="" />
          </div>
          <div className="item">
            <h1>Stats</h1>
            {pokeData.stats.map((el) => (
              <p key={el.stat.name}>
                {el.stat.name} {el.base_stat}
              </p>
            ))}
          </div>
          <div className="item">
            <h1>Abilities</h1>
            {pokeData.abilities.map((el) => (
              <p key={el.ability.name}>{el.ability.name}</p>
            ))}
          </div>
        </div>
      );
    }

    // outputs loading message during render
    if (pokemonState.loading) {
      return <p>Loading...</p>;
    }

    // outputs error message when error is caught
    if (pokemonState.errorMsg) {
      return <p>{pokemonState.errorMsg}</p>;
    }

    // outputs message when no data is found
    return <p>Unable to find data for pokemon</p>;
  };

  // outputs rest of the page
  return (
    <div>
      <h1>{pokemonName}</h1>
      {showData()}
    </div>
  );
};

export default Pokemon;
