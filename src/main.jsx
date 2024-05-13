import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PersonajesProvider from "./context/PersonajesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <PersonajesProvider>
      <App />
    </PersonajesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
