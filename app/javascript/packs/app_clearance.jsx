import React from "react";
import ReactDOM from "react-dom";
import AppClearance from "../react/AppClearance";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <AppClearance />,
    document.body.appendChild(document.createElement("div"))
  );
});
