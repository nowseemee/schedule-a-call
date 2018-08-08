import React from "react";
import { Route } from "react-router-dom";

import Start from "./pages/Start";
import Schedule from "./pages/Schedule";
import Success from "./pages/Success";

export default class extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Start} />
        <Route
          exact
          path="/schedule/:type?/:date?/:slot?/:message?"
          component={Schedule}
        />
        <Route exact path="/success/:stylist" component={Success} />
      </div>
    );
  }
}
