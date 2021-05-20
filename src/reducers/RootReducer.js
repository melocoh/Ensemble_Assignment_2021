import { combineReducers } from "redux";
import ListReducer from "./ListReducer";
import MultipleReducer from "./MultipleReducer";

const RootReducer = combineReducers({
    PokemonList: ListReducer,
    Pokemon: MultipleReducer
});

export default RootReducer;
