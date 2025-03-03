import { useState } from "react";
import '../static/auth.css';
import Login from "./Login";
import Signup from "./Signup";

const Auth: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);

    return (
        <>
            <div className="auth-main">
                {currentPage === 0 && <Login setCurrentPage={setCurrentPage} />}
                {currentPage === 1 && <Signup setCurrentPage={setCurrentPage} />}
            </div>
        </>
    );
}

export default Auth;