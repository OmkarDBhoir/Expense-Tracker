import { Link } from "react-router-dom";
import {
  DashboardIcon,
  ExpenseIcon,
  IncomeIcon,
  SettingsIcon,
} from "../../styles/Icons";
import "./navbar.css";
import { useState } from "react";

export const Navbar: React.FC = () => {

  const [active, setActive] = useState<number>(1);
  return (
    <>
      <div className="navbar">
        <div className="title">
          <h3>Expense Tracker</h3>
        </div>
        <div className="navList">
          <ul>
            <li className={(active === 1 ? "active" : "")} onClick={() => setActive(1)}>
              <Link to="/"><DashboardIcon /> Dashboard</Link>
            </li>
            <li className={(active === 2 ? "active" : "")} onClick={() => setActive(2)}>
              <Link to="/expense"><ExpenseIcon /> Expense</Link>
            </li>
            <li className={(active === 3 ? "active" : "")} onClick={() => setActive(3)}>
              <Link to="/income"><IncomeIcon /> Income</Link>
            </li>
            <li className={(active === 4 ? "active" : "")} onClick={() => setActive(4)}>
              <Link to="/settings"><SettingsIcon /> Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
