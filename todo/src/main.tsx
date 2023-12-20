import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "../node_modules/react-redux/dist/react-redux";
import App from "./App.tsx";
import "./index.css";
import { store } from "./redux/store/store";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
  </>
);
