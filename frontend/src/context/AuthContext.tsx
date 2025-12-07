import { createContext, useEffect, useState } from "react"
import { getAccessToken, isTokenExpired, removeAccessToken, removeTokens } from "../api/tokenUtils";
import { authService } from "../api/authService";

export type LoginPayLoad = {
    username: string;
    password: string;
    remember?: boolean;
}

type AuthContextType = {
    isAuthenticated: boolean;
    login: (data: LoginPayLoad) => Promise<void>;
    logout: () => void;
    initializing: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);


export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [initializing, setInitializing] = useState<boolean>(true);
    useEffect(() => {
        const token = getAccessToken();
        if (token && !isTokenExpired(token)) {
            setIsAuthenticated(true);
        } else {
            removeTokens();
            setIsAuthenticated(false);
        }

        setInitializing(false);
    }, [])

    const login = async (data: LoginPayLoad) => {
        try {
            await authService.login(data);
            setIsAuthenticated(true);
        } catch (error) {
            setIsAuthenticated(false);
            throw error;
        }
    }

    const logout = () => {
        removeAccessToken();
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, initializing }}>
            {children}
        </AuthContext.Provider>
    )
}