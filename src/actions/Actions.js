import axios from "axios";
import {
  POKEMON_LIST_LOADING,
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAIL,
  POKEMON_MULTIPLE_LOADING,
  POKEMON_MULTIPLE_SUCCESS,
  POKEMON_MULTIPLE_FAIL,
} from "./Types";
import { MAX_PER_PAGE } from "../utils/Constants";

/**
 * HTTP GET method that fetches all pokemon in the API
 * @param page
 * @returns dispatch obj
 */
export const GetPokemonList = (page) => async (dispatch) => {
  try {
    dispatch({
      type: POKEMON_LIST_LOADING,
    });

    const offset = page * MAX_PER_PAGE - MAX_PER_PAGE;
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${MAX_PER_PAGE}&offset=${offset}`
    );

    dispatch({
      type: POKEMON_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: POKEMON_LIST_FAIL,
    });
  }
};

/**
 * HTTP GET method that fetches a single pokemon and its description
 * @param pokemon
 * @returns dispatch obj
 */
export const GetPokemon = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: POKEMON_MULTIPLE_LOADING,
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: POKEMON_MULTIPLE_SUCCESS,
      payload: res.data,
      pokemonName: pokemon,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: POKEMON_MULTIPLE_FAIL,
    });
  }
};
