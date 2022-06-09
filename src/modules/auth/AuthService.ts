import AuthApi from "./AuthApi";
import {IAuthLogin, IAuthLoginResponse} from "./AuthTypes";

export default class AuthService {
    authApi: AuthApi;

    constructor() {
        this.authApi = new AuthApi();
    }

    authLogin = async (loginData: IAuthLogin): Promise<IAuthLoginResponse> => {
        const { data } = await this.authApi.authLogin(loginData);
        return data;
    };
}