import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => <h1>Hello</h1>;

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App} />
  </BrowserRouter>,
  document.getElementById("root")
);
