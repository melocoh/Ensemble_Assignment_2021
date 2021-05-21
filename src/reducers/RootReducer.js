import { combineReducers } from "redux";
import ListReducer from "./ListReducer";
import MultipleReducer from "./MultipleReducer";

/**
 * A combined reducer for handling the state of two different objects
 */
const RootReducer = combineReducers({
    PokemonList: ListReducer,
    Pokemon: MultipleReducer
});

export default RootReducer;
