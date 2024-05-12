import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home} from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./Components/Navbar/Navbar";
import Expense from "./Components/Expense/Expense";
import Income from "./Components/Income/Income";
import Settings from "./Components/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Navbar />
          </div>
          <div className="col mainContainer">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/expense" element={<Expense />} />
              <Route path="/income" element={<Income />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
