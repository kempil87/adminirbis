export interface IAuthLogin {
    email: string;
    password: string;
}

export interface IAuthLoginResponse {
    email: string;
    token: string;
}