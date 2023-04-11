import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../HomePage/Home";
import Detail from "../Detail/Detail";

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}
