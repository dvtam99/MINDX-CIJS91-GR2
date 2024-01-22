import React from "react";
import "./base.scss";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Pomo from "./views/Pomo";
import Pokemon from "./views/Pokemon";
// con;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <a href="/pomo"> pomo</a>
                <div>
                  <a href="/pokemon"> pokemon</a>
                </div>
                <div>
                  <a href="/profile"> profile</a>
                </div>
                <div>
                  <a href="/about"> about</a>
                </div>
                <div>
                  <a href="/login"> login</a>
                </div>
              </div>
            }
          ></Route>
          <Route path="/pomo" element={<Pomo />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/profile" element={<div>profile</div>} />
          <Route path="/about" element={<div> about</div>} />
          <Route path="/login" element={<div>login</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
