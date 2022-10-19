import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="px-3">
    <Navbar />
      <App />
    </div>
      
    </BrowserRouter>
    ,
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
