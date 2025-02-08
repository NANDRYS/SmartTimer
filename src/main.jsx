import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import  "./assets/css/main.css";
import { StrictMode } from "react";
import "material-icons/iconfont/material-icons.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
