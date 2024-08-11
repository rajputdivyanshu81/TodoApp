import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem"; // Corrected the path

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
