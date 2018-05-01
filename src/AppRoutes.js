import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/Home/Home.js'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          component={Home}
        />
      </Switch>
    );
  }
}

export default Routes;
