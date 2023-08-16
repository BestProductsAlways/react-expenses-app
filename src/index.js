import React from "react";
import ReactDOM from "react-dom/client";

// components
import { OverlayContextProvider } from "./context/OverlayContext";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// styles
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <OverlayContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </OverlayContextProvider>
  </React.StrictMode>
);
