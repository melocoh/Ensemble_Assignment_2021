import _, { lowerCase } from "lodash";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemonList } from "../actions/Actions";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { MAX_PER_PAGE, PAGE_RANGE, MARGIN_PAGE } from "../utils/Constants";
import {InputLowerCase} from '../utils/InputLowerCase';

/**
 * A component that produces a list of pokemon
 */
const PokemonList = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  useEffect(() => {
    fetchData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** A function that fetches data for the specified page */
  const fetchData = (page) => {
    dispatch(GetPokemonList(page));
  };

  /** A function that displays a list of pokemon */
  const showData = () => {
    // maps data and outputs list if data exists
    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div className={"list-wrapper"}>
          {pokemonList.data.map((el) => {
            return (
              <div key={el.url} className={"pokemon-item"}>
                <p>{el.name}</p>
                <Link to={`/pokemon/${el.name}`}>View</Link>
              </div>
            );
          })}
        </div>
      );
    }

    // outputs loading message during render
    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }

    // outputs error message when error is caught
    if (pokemonList.errorMsg) {
      return <p>{pokemonList.errorMsg}</p>;
    }

    // outputs message when no data is found
    return <p>Unable to find data for list of pokemon</p>;
  };

  // outputs rest of the page
  return (
    <div>
      <div className={"search-wrapper"}>
        <p>Search: </p>
        <input type="text" style={{textTransform: lowerCase}} onChange={(e) => setSearch(e.target.value)} onInput={InputLowerCase} />
        <button onClick={() => props.history.push(`/pokemon/${search}`)}>
          Search
        </button>
      </div>
      {showData()}
      {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / MAX_PER_PAGE)}
          pageRangeDisplayed={PAGE_RANGE}
          marginPagesDisplayed={MARGIN_PAGE}
          onPageChange={(data) => fetchData(data.selected + 1)}
          containerClassName={"pagination"}
        />
      )}
    </div>
  );
};

export default PokemonList;
