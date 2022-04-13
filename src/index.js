import React from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./global.css";

import App from "./components/menu";

ReactDOM.render(
  <>
    <Router>
      <App />
    </Router>
  </>,
  window.root,
  () => {
    console.log("react 渲染完成");
  }
);
