/** @format */

import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../src/components/Home/Home";
import Kitchen from "./components/Kitchen/Kitchen";
import KitchenAsia from "./components-kitchen/kitchen-asia";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/kitchen-asia" element={<KitchenAsia />} />
      </Routes>
    </>
  );
};

export default App;
