import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);