import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs";
import AdvancedFormat from "dayjs/plugin/advancedFormat";
import { BrowserRouter } from "react-router-dom";
import { injectGlobal } from "emotion";

import colors from "./colors";
import App from "./App";

dayjs.extend(AdvancedFormat);

injectGlobal`
  ul {
    margin: 0;
    padding: 0;
  }
  body {
    padding: 20px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: ${colors.typography};
  }
  #root {
    max-width: 720px;
    position:relative;
    margin: 0 auto;
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
