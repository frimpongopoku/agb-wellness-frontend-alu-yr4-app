import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./App";
import Manager from "./pages/manager/Manager";
import "./shared/css/universal.css";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/staff" element={<Landing />} />
        <Route exact path="/staff/create/goal" element={<Landing />} />
        <Route exact path="/staff/edit/goal/:id" element={<Landing />} />
        <Route exact path="/manager" element={<Manager />} />
        <Route exact path="/manager/add/staff" element={<Landing />} />
        <Route exact path="/manager/add/category" element={<Landing />} />
        <Route exact path="/manager/edit/category/:id" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
