import "./style/App.css";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import Pokemon from "./containers/Pokemon";

const App = () => {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Pokedex</NavLink>
      </nav>
      <Switch>
        <Route path="/" exact component={PokemonList} />
        <Route path="/pokemon/:pokemon" exact component={Pokemon} />
        {/* redirects if using a non-existing path */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
