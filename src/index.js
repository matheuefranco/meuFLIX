import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
