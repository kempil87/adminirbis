import * as React from "react";
import "./Auth.css"
import {Link} from "react-router-dom";
import {useRootStore} from "../../../base/hooks/useRootStore";
import {useForm} from "react-hook-form";
import {observer} from "mobx-react";

const Auth = observer(() => {
    const {authStore} = useRootStore();

    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            mode: 'onSubmit',
            reValidateMode: 'onSubmit',
        });

    const authUser = (data: any) => {
        authStore.authLogin(data)
    }

    return (
        <div className="auth ">
            <div className="auth-wrap d-flex align-items-center justify-content-center flex-column ">
                <h4 className="auth-title">Вход</h4>
                <label className="mt-4 ">
                    <input
                        className={errors.email ? "auth-input-war" : "auth-input"}
                        {...register("email",
                            {
                                required:'required',
                                pattern: /\S+@\S+\.\S+/
                            })}
                        placeholder="Почта"
                        type="email"
                        value={'glebxok@mail.com'}
                    />

                    {errors.email && (
                        <h6 className='warning-auth d-flex align-items-center'>
                            <span className="material-symbols-outlined">warning</span>
                            * Mail должен быть больше 4 символов
                        </h6>
                    )}

                </label>

                <label className="mt-3 ">
                    <input className={errors.password ? "auth-input-war" : "auth-input"}
                           placeholder="Пароль"
                           type="password"
                           value={'12341234'}
                           {...register("password", {minLength: 6})}/>

                    {errors.password && (
                        <h6 className='warning-auth d-flex align-items-center'>
                            <span className="material-symbols-outlined">warning</span>
                            * Пароль должен быть больше 6 символов
                        </h6>
                    )}

                </label>
                <div className="mt-4 auth-btn" onClick={handleSubmit(authUser)}>Войти</div>
            </div>
        </div>
    );
});

export default Auth;