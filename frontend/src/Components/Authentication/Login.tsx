import "./auth.css";

const Login: React.FC = () => {
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
