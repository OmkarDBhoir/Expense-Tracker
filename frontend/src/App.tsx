import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./Components/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./Components/Navbar/Navbar";
import Expense from "./Components/Expense/Expense";
import Income from "./Components/Income/Income";
import Settings from "./Components/Settings/Settings";
import Login from "./Components/Authentication/Login";
import { useEffect, useState } from "react";
import SignUp from "./Components/Authentication/Signup";

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  
  useEffect(() => {
    setIsLoggedIn(location.pathname !== '/login' && location.pathname !== '/signup');
  }, [location.pathname]);
  return (
    <div className="container-fluid">
      <div className="row" style={{ padding: (isLoggedIn) ? "10px" : "" }}>
        <div className="col-3" style={{ maxWidth: "260px" }}>
          {isLoggedIn && <Navbar />}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/income" element={<Income />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
