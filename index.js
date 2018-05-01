import React from "react";
import { render } from "react-dom";
// import Routes from "./src/AppRoutes";
import Home from './src/components/Home/Home'
// import { BrowserRouter as Router } from "react-router-dom";
import Provider from './src/Context/Provider';

import "./styles.scss";

render(
  <Provider>
    <div>
      <Home />
    </div>
  </Provider>,
  document.getElementById("root")
);
