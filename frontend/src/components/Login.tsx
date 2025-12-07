import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [submitting, setSubmitting] = useState<boolean>(false);

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async () => {
        try {
            setSubmitting(true);
            if (username && password) {
                await login({ username, password });
                navigate("/", { replace: true });
            }
        } catch (error) {
            console.error("Login failed", error);
        } finally {
            setSubmitting(false);
        }
    }
    return (
        <>
            <div className="flex-1 w-full min-h-screen grid place-items-center">
                <div className="w-[400px] h-[450px] backdrop-blur-md bg-white/10 border border-white/10 rounded-sm shadow flex flex-col">
                    <div className="w-full h-[25%] grid place-items-center text-2xl font-bold">Login</div>
                    <div className="w-full flex-1 flex flex-col items-center justify-center gap-4">
                        <div className="w-[90%] h-10 flex items-center justify-between gap-2">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" className="h-8 w-[70%] border-2 border-white/10 focus:outline-0 p-2" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div className="w-[90%] h-10 flex items-center justify-between gap-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="h-8 w-[70%] border-2 border-white/10 focus:outline-0 p-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="w-[90%] h-10 flex items-center justify-center gap-2">
                            <button className="text-(--primary)">forgot passwword</button>
                        </div>
                        <div className="w-full h-10">
                            <button className="w-25 h-8 border-2 border-white/10 rounded-sm bg-(--success) hover:bg-(--success-hover) text-white" onClick={handleLogin} disabled={!username || !password || submitting}>{submitting ? "Logging in..." :"Login"}</button>
                        </div>
                        <div>
                            <p>Don't have an account? <a className="text-(--primary) border-0 bg-transparent" href="/signup">Signup</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;