// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import HoochHandymanSite from "./HoochHandymanSite"; // <- make sure this filename matches your component file
import "./index.css"; // if you have this, otherwise remove this line

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HoochHandymanSite />
  </React.StrictMode>
);
