import React from "react";
import "./base.scss"
import "./App.css";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Pomo from "./views/Pomo";

function App() {

  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Pomo />} />
      <Route path="/profile" element={<div>profile</div>} />
      <Route path="/about" element={<div> about</div>} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;

