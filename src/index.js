import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./Store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById("root")
);
