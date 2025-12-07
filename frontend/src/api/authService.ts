import type { LoginPayLoad } from "../context/AuthContext";
import { apiService } from "./apiService"
import { removeTokens, setAccessToken, setTokens } from "./tokenUtils";

type LoginResp = {
    accessToken: string;
    refreshToken?: string;
    user?: any;
}

export const authService = {
    login: async (data: LoginPayLoad) => {
        const response = await apiService.post<LoginResp>("/auth/login", data);
        setTokens(response.accessToken, response.refreshToken, !!data.remember);
        return response;
    },

    refresh: async () => {
        const response = await apiService.post<LoginResp>("/auth/refresh", {});
        setTokens(response.accessToken, response.refreshToken);
    },

    signup: async (data: Record<string, any>) => {
        return apiService.post("/auth/signup", data);
    },

    logout: async () => {
        try {
            await apiService.post("/auth/logout");
        } catch (error) {
        }
        removeTokens();
    }
}