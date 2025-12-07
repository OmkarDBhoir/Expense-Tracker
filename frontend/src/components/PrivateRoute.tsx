import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute() {
    const { isAuthenticated, initializing } = useAuth();

    // return isAuthenticated ? children : <Navigate to={"/login"} replace />;
    return initializing ? null : isAuthenticated ? <Outlet /> : <Navigate to={"/login"} replace />;
}