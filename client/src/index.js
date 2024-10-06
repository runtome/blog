import React from "react";
import { createRoot } from "react-dom/client"; // Correct import
import App from "./App";

// Create a root container and render the app
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
