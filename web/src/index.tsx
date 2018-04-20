import * as React from "react";
import { render } from "react-dom";

import { HashRouter as Router } from "react-router-dom";

import "./main.scss";

import App from "./components/App";

render(<Router><App /></Router>, document.getElementById("app"));
