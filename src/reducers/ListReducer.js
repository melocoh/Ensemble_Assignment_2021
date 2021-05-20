import {
  POKEMON_LIST_LOADING,
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAIL,
} from "../actions/Types";

const DefaultState = {
  loading: false,
  data: [],
  count: 0,
};

const ListReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case POKEMON_LIST_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case POKEMON_LIST_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "Unable to retrieve data",
      };
    case POKEMON_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        errorMsg: "",
        count: action.payload.count,
      };
    default:
      return state;
  }
};

export default ListReducer;
