
export interface DecodedToken {
    exp: number
    iat: number
    isAuthenticated: boolean
    userId: string
    username: string
}


export interface UserData {
    userId: string;
    username: string;
    isAuthenticated: boolean;
}