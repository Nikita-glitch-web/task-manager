import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import style from "./styles/App.module.css";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <div className={style.app_wrapper}>
    <App />
  </div>
);
