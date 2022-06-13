import {api} from "../../base/axios"
import {IAuthLogin} from "./AuthTypes";

export default class AuthApi {
    authLogin = (data: IAuthLogin) => {
        return api.post("auth/login", data);
    };

    registerUser = (data: IAuthLogin) => {
        return api.post("auth/register", data);
    };
}