import AuthApi from "./AuthApi";
import {IAuthLogin, IAuthLoginResponse, IRegResponse} from "./AuthTypes";

export default class AuthService {
    authApi: AuthApi;

    constructor() {
        this.authApi = new AuthApi();
    }

    authLogin = async (loginData: IAuthLogin): Promise<IAuthLoginResponse> => {
        const { data } = await this.authApi.authLogin(loginData);
        return data;
    };

    registerUser = async (registerData: IAuthLogin): Promise<IRegResponse> => {
        const { data } = await this.authApi.registerUser(registerData);
        return data;
    };
}