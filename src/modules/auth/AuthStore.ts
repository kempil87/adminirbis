import {makeAutoObservable, runInAction} from "mobx";
import AuthService from "./AuthService";
import {IAuthLogin} from "./AuthTypes";

export class AuthStore {
    loader: boolean = false;
    loaderNotification: boolean = false;

    email: string = "";
    token: string = "";

    private authService: AuthService;

    constructor() {
        makeAutoObservable(this);
        this.authService = new AuthService();
    }

    authLogin = async (data: IAuthLogin) => {
        this.setLoading(true)

        try {
            const res = await this.authService.authLogin({email: data.email, password: data.password});

            runInAction(() => {
                this.token = res.token;
                this.email = res.email;
            });

            localStorage.setItem("token", res.token);
            localStorage.setItem("email", res.email);
        } catch (e) {
            console.log("Error", e);
        } finally {
            this.setLoading(false);
        }
    };

    registerUser  = async (data:IAuthLogin) =>{
        this.setLoading(true)
        try {
            const res = await this.authService.registerUser(data)
            if (res){
                this.setLoadingNotification(true)
            }
        } catch (e){
            console.log("Error", e);
        } finally {
            this.setLoading(false)
            setTimeout(()=>{
                this.setLoadingNotification(false)
            },1800)
        }
    }



    logout = () => {
        this.setLoading(true)

        this.setToken("")
        localStorage.clear()
    };

    setToken = (value: string) => {
        runInAction(() => {
            this.token = value;
        });
    }

    setLoading = (value: boolean) => {
        runInAction(() => {
            this.loader = value;
        });
    };

    setLoadingNotification = (value: boolean) => {
        runInAction(() => {
            this.loaderNotification = value;
        });
    };
}