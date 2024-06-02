import { useEffect } from "react";
import "./auth.css";
import ExpesneTrackerBaseConstants from "../Controller/ExpenseTrackerConstants";
import axios from "axios";

const Login: React.FC = () => {
  const handleLogin = async() => {
    try {
      const response = await axios.get(`${ExpesneTrackerBaseConstants.base_url}/welcome`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleLogin();
  },[])
  return (
    <>
      <div className="loginContainer">
        <div className="logginInnerContainer">
          <h1>Login</h1>
          <div className="input-wrapper">
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="Enter user name..." />
          </div>
          <div className="input-wrapper">
            <label htmlFor="pass">Passowrd:</label>
            <input type="password" placeholder="Enter password..." />
          </div>

          <button>Login</button>
        </div>
      </div>
    </>
  );
};

export default Login;
