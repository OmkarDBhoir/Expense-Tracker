import type { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import axios from "axios";
import { getAccessToken, getRefreshToken, removeTokens, setTokens } from "./tokenUtils";
import { toast } from "react-toastify";
import { hideLoader, showLoader } from "../service/loaderService";

declare module "axios" {
    export interface InternalAxiosRequestConfig {
        _retry?: boolean;
        __retryCount?: number;
        __skipLoader?: boolean;
    }
}

const baseURL = import.meta.env.API_URL || "http://localhost:5000";

const api: AxiosInstance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    timeout: 200000,
});


const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

const shouldRetry = (error: AxiosError) => {
    if (!error.response) return true;
    const status = error.response.status;
    return status >= 500 && status <= 600;
}

let isRefreshing = false;
// let refreshPromise: Promise<string> | null = null;
let pendingRequests: Array<(token: string | null) => void> = [];

async function doRefresh(): Promise<string> {
    const refreshToken = getRefreshToken();

    try {
        const res = await axios.post(`${baseURL}/auth/refresh`, refreshToken ? { refreshToken } : {}, { withCredentials: true });
        const { accessToken, refreshToken: newRefresh } = res.data;
        setTokens(accessToken, newRefresh, !!newRefresh);
        return accessToken;
    } catch (error) {
        removeTokens();
        throw error;
    }
}

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    if (!config.__skipLoader) {
        showLoader();
    }
    const token = getAccessToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

api.interceptors.response.use(
    (response: AxiosResponse) => {
        hideLoader();
        return response;
    },
    async (error: AxiosError) => {
        hideLoader();
        const original = error.config as InternalAxiosRequestConfig | undefined;

        if (!original) return Promise.reject(error);

        if (error.response?.status === 401 && !original._retry) {
            original._retry = true;

            if (!isRefreshing) {

                isRefreshing = true;

                doRefresh().then((token) => {
                    pendingRequests.forEach((cb) => cb(token));
                }).catch(() => {
                    pendingRequests.forEach((cb) => cb(null));
                }).finally(() => {
                    isRefreshing = false;
                    pendingRequests = [];
                });
            }

            return new Promise((resolve, reject) => {
                pendingRequests.push(async (token) => {
                    if (!token) {
                        toast.error("Session expired. Please login again");
                        removeTokens();
                        window.location.href = '/login';
                        return reject(error);
                    }

                    original.headers = original.headers ?? {};
                    original.headers.Authorization = `Bearer ${token}`;

                    try {
                        resolve(await api(original));
                    } catch (error) {
                        reject(error)
                    }
                });
            });
        }

        const maxRetries = 3;
        const retryCount = original.__retryCount ?? 0;

        if (shouldRetry(error) && retryCount < maxRetries) {
            original.__retryCount = retryCount + 1;
            const delay = 300 * 2 ** retryCount + Math.random() * 100;
            await sleep(delay);
            return api(original);
        }

        if (error.response) {
            const { status, data } = error.response;

            const message = (data as any)?.message || (data as any)?.error || error.message;
            if (status !== 401) {
                toast.error(message || "Request failed");
            }
        } else {
            toast.error("Network error. Check your connection.");
        }

        return Promise.reject(error);
    }
);

export default api;