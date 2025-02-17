import React from "react";
import Header from "./components/Header/Header"
import { BrowserRouter, Routes, Route } from "react-router";
import Addition from "./components/Addition/Addition";
import Substraction from "./components/Substraction/Substraction";
import Division from "./components/Division/Division";
import Multiplication from "./components/Multiplication/Multiplication";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/addition" element={<Addition />} />
        <Route path="/substraction" element={<Substraction />} />
        <Route path="/division" element={<Division />} />
        <Route path="/multiplication" element={<Multiplication />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
