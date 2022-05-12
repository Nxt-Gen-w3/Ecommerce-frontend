import React from "react";
import ReactDom from "react-dom";
import App from "./Components/App.js";
import "./stylesheets/style.css";
import "./stylesheets/custom.css";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
