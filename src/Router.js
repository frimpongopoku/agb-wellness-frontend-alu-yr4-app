import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./App";
import "./shared/css/universal.css";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
