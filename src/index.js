import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./state/store";
import {BrowserRouter} from 'react-router-dom';

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(
  <React.StrictMode>
      <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
      </Provider>
  </React.StrictMode>

  ,document.getElementById("root")
);