import React from "react";
import ReactDOM from "react-dom/client"; // For React 18 and later
import AppWrapper from "./AppWrapper"; // Import AppWrapper

const root = ReactDOM.createRoot(document.getElementById("root")); // For React 18 and later
root.render(
  <React.StrictMode>
    <AppWrapper /> {/* Use AppWrapper as the root component */}
  </React.StrictMode>
);
