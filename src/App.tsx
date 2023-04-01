/** @format */
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../src/components/Home/Home";
import Kitchen from "./components/Kitchen/Kitchen";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kitchen" element={<Kitchen />} />
      </Routes>
    </>
  );
};

export default App;
