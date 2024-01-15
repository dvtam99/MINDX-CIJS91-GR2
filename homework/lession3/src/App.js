import React from "react";
import "./base.scss";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Pomo from "./views/Pomo";
import Pokemon from "./views/Pokemon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pomo" element={<Pomo />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/profile" element={<div>profile</div>} />
        <Route path="/about" element={<div> about</div>} />
        <Route path="/login" element={<div>login</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
