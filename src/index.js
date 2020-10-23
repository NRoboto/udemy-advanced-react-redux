import React from "react";
import ReactDOM from "react-dom";

import { App } from "components/app";
import { Root } from "root";

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector("#root")
);
