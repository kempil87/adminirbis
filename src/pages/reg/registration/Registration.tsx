import React from 'react';
import {Link} from "react-router-dom";
import Notification from "../../../components/ui/Notification/Notification";
import {observer} from "mobx-react";
import {useRootStore} from "../../../base/hooks/useRootStore";
import {useForm} from "react-hook-form";

export const Registration = observer(() => {
    const {authStore} = useRootStore();
    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            mode: 'onSubmit',
            reValidateMode: 'onSubmit',
        });

    const registerUser = (data) => {
        authStore.registerUser(data)
    }

    return (
        <div className="auth">
            <div className="auth-wrap d-flex align-items-center justify-content-center flex-column">
                <h4 className="auth-title">Регистрация</h4>
                <label className="mt-4">
                    <input className={errors.email ? "auth-input-war" : "auth-input"}
                           placeholder="Почта"
                           type="email"
                           name="mail"
                           {...register("email",
                               {
                                   required:'required',
                                   pattern: /\S+@\S+\.\S+/
                               })}/>
                    {errors.email && (
                        <h6 className='warning-auth d-flex align-items-center'>
                            <span className="material-symbols-outlined">warning</span>
                            * Mail некорректный
                        </h6>
                    )}

                </label>
                <label className="mt-3">
                    <input className={errors.password ? "auth-input-war" : "auth-input"}
                           placeholder="Пароль"
                           type="password" name="password"
                           {...register("password", {minLength: 6})}/>
                    {errors.password && (
                        <h6 className='warning-auth d-flex align-items-center'>
                            <span className="material-symbols-outlined">warning</span>
                            * Пароль должен быть больше 6 символов
                        </h6>
                    )}
                </label>
                <Link className="mt-2 auth-link" to="/">У меня уже есть аккаунт</Link>
                <div className="mt-2 auth-btn" onClick={handleSubmit(registerUser)}>Зарегестрироваться</div>
                {authStore.loaderNotification && (
                    <Notification text='Вы успешно авторизовались' icon='check_circle'/>
                )}
            </div>
        </div>
    );
})