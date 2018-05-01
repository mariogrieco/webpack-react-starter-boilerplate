import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          render={() => {
            return "home";
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
