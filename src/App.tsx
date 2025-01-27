import React from "react";
import Header from "./components/Header/Header"
import { BrowserRouter, Routes, Route } from "react-router";
import Addition from "./components/Addition/Addition";
import Substraction from "./components/Substraction/Substraction";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/addition" element={<Addition />} />
        <Route path="/substraction" element={<Substraction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
