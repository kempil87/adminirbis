import * as React from "react";
import "./Auth.css"
import {Link} from "react-router-dom";
import {useRootStore} from "../../../base/hooks/useRootStore";
import {useForm} from "react-hook-form";

const Auth = () => {
    const {authStore} = useRootStore();

    const {register, handleSubmit, formState: {errors}} = useForm();

    const authUser = (data: any) => {
        authStore.authLogin(data)
    }

    return (
        <div className="auth ">
            <div className="auth-wrap d-flex align-items-center justify-content-center flex-column ">
                <h4 className="auth-title">Вход</h4>
                <label className="mt-4 ">
                    <input
                        className="auth-input"
                        {...register("email", {min: 4})}
                        placeholder="Почта"
                        type="email"
                    />

                    {errors.email && (
                        <h6 className='warning-auth d-flex align-items-center'>
                            <span className="material-symbols-outlined">warning</span>
                            * Mail должен быть больше 4 символов
                        </h6>
                    )}

                </label>

                <label className="mt-3 ">
                    <input className="auth-input" placeholder="Пароль" type="password"
                           {...register("password", {min: 6})}/>

                    {errors.password && (
                        <h6 className='warning-auth d-flex align-items-center'>
                            <span className="material-symbols-outlined">warning</span>
                            * Пароль должен быть больше 6 символов
                        </h6>
                    )}

                </label>
                <div className="mt-4 auth-btn" onClick={handleSubmit(authUser)}>Войти</div>
                <Link className='reg-link' to='/registration'>Зарегестрироваться</Link>
            </div>
        </div>
    );
};

export default Auth;