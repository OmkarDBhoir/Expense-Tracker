import { useState } from "react";
import { BaseConstants } from "../Services/baseconstants";
import axios from "axios";


const Login: React.FC<{ setCurrentPage: React.Dispatch<React.SetStateAction<number>> }> = ({ setCurrentPage }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${BaseConstants.BASE_URL}/login`, { username, password });
            if (response && response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
                window.location.reload();
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="login-card flexedColumn">
                <div className="login-title flexedRow align-items-center justify-content-center">Login</div>
                <div className="inputWrapper flexedRow justify-content-center align-items-center gap-1">
                    <label htmlFor="loginUser">Username:</label>
                    <input id="loginUser" type="text" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="inputWrapper flexedRow justify-content-center align-items-center gap-1">
                    <label htmlFor="loginPassword">Password:</label>
                    <input id="loginPassword" type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="buttonWrapper flexedRow justify-content-center align-items-center">
                    <button id="loginButton" onClick={handleLogin}>Login</button>
                </div>
                <div className="alterate-link">
                    <p>Don't have an account? <a onClick={() => setCurrentPage(1)}>Sign Up</a></p>
                </div>
            </div>
        </>
    );
}

export default Login;