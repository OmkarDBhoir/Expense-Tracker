import api from "./axios";


export const apiService = {
    get: <T>(url: string) => api.get<T>(url).then((res) => res.data),
    
    post: <T>(url: string, body?: any) => api.post<T>(url, body).then((res) => res.data),
    
    put: <T>(url: string, body?: any) => api.put<T>(url, body).then((res) => res.data),

    delete: <T>(url:string) => api.delete<T>(url).then((res) => res.data),
};

