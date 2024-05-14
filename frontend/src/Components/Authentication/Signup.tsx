const SignUp: React.FC = () => {
  return (
    <>
      <div className="loginContainer">
        <div className="logginInnerContainer">
          <h1>Signup</h1>
          <div className="input-wrapper">
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="Enter user name..." />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email:</label>
            <input type="text" placeholder="Enter email..." />
          </div>
          <div className="input-wrapper">
            <label htmlFor="pass">Passowrd:</label>
            <input type="password" placeholder="Enter password..." />
          </div>

          <button>Signup</button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
