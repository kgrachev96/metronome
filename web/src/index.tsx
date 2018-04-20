import * as React from "react";
import { render } from "react-dom";

import "./main.scss";

import App from "./components/App";
import Technical from "./pages/Technical";

render(<Technical />, document.getElementById("app"));
