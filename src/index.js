import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TagManager from "react-gtm-module";
const root = ReactDOM.createRoot(document.getElementById("root"));
const tagManagerArgs = {
  gtmId: "G-ZZ850SXE9J",
};
TagManager.initialize(tagManagerArgs);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
