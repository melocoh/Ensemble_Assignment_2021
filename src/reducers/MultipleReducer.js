import {
  POKEMON_MULTIPLE_LOADING,
  POKEMON_MULTIPLE_SUCCESS,
  POKEMON_MULTIPLE_FAIL,
} from "../actions/Types";

const DefaultState = {
  loading: false,
  data: {},
  errorMsg: "",
};

const MultipleReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case POKEMON_MULTIPLE_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case POKEMON_MULTIPLE_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "Unable to retrieve data",
      };
    case POKEMON_MULTIPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: "",
        data: {
            ...state.data,
            [action.pokemonName] : action.payload
        }
      };
    default:
      return state;
  }
};

export default MultipleReducer;