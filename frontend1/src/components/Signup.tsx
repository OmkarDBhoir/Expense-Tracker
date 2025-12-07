import { useState } from "react";
import axios from "axios";
import { BaseConstants } from "../Services/baseconstants";


const Signup: React.FC<{ setCurrentPage: React.Dispatch<React.SetStateAction<number>> }> = ({ setCurrentPage }) => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignup = async () => {
        try {
            const response = await axios.post(`${BaseConstants.BASE_URL}/signup`, { username, email, password });
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
                <div className="login-title flexedRow align-items-center justify-content-center">Sign Up</div>
                <div className="inputWrapper flexedRow justify-content-between align-items-center">
                    <label htmlFor="loginUser">Username:</label>
                    <input id="loginUser" type="text" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="inputWrapper flexedRow justify-content-between align-items-center">
                    <label htmlFor="loginUser">Email:</label>
                    <input id="loginUser" type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="inputWrapper flexedRow justify-content-between align-items-center">
                    <label htmlFor="loginPassword">Password:</label>
                    <input id="loginPassword" type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="buttonWrapper flexedRow justify-content-center align-items-center">
                    <button id="loginButton" onClick={handleSignup}>Sign Up</button>
                </div>
                <div className="alterate-link">
                    <p>Already have an account? <a onClick={() => { setCurrentPage(0) }}>Login</a></p>
                </div>
            </div>
        </>
    );
}

export default Signup;