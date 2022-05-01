import React from "react";
import ReactDOM from "react-dom";
// import browser router and routes and route components v6 from react-router-dom
import {  BrowserRouter, Routes, Route, } from "react-router-dom";

import "./index.css";
import App from "./App";
import Single from "./single";

ReactDOM.render(
  

<BrowserRouter>
<Routes>
  <Route path="/" element={<App />} />
    <Route path="single/:id" element={<Single />} />
</Routes>
</BrowserRouter>,
  document.getElementById("root")
);
