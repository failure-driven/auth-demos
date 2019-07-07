import React from "react";
import ReactDOM from "react-dom";
import AppDevise from "../react/AppDevise";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <AppDevise />,
    document.body.appendChild(document.createElement("div"))
  );
});
