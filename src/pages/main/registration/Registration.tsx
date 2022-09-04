import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import Notification from "../../../components/ui/Notification/Notification";
import {observer} from "mobx-react";
import {useRootStore} from "../../../base/hooks/useRootStore";
import {useForm} from "react-hook-form";
import {Button} from "antd";
import {EyeOutlined,EyeInvisibleOutlined} from "@ant-design/icons";

export const Registration = observer(() => {
    const navigate = useNavigate()
    const [showPassword,setShowPassword] = useState(true)

    const {authStore} = useRootStore();
    const {register,reset, handleSubmit, formState: {errors}} = useForm(
        {
            mode: 'onSubmit',
            reValidateMode: 'onSubmit',
        });

    const registerUser = (data) => {
        authStore.registerUser(data)
        reset()
    }

    return (
        <div className='pt-3'>
            <h4 className="auth-title">Регистрация</h4>
            <div className='d-flex'>
                <div className='d-flex flex-column col-4'>
                    <label className="">
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
                    <label className="mt-2">
                        <input className={errors.password ? "auth-input-war" : "auth-input"}
                               placeholder="Пароль"
                               type={showPassword ? 'text':"password"} name="password"
                               {...register("password", {minLength: 6})}/>
                        {errors.password && (
                            <h6 className='warning-auth d-flex align-items-center'>
                                <span className="material-symbols-outlined">warning</span>
                                * Пароль должен быть больше 6 символов
                            </h6>
                        )}
                        {showPassword ?
                            <Button style={{height:40,marginLeft:8,marginBottom:2}} onClick={() => setShowPassword(false)}><EyeOutlined /></Button>
                            :
                            <Button style={{height:40,marginLeft:8,paddingBottom:2}} onClick={() => setShowPassword(true)}><EyeInvisibleOutlined /></Button>
                        }
                    </label>


                </div>
                <div className='col-4 d-flex flex-column'>
                    <label className="">
                        <input className={errors.password ? "auth-input-war" : "auth-input"}
                               placeholder="Фамилия *"
                                name="surname"
                               {...register("surname", {minLength: 6})}/>
                        {errors.surname && (
                            <h6 className='warning-auth d-flex align-items-center'>
                                <span className="material-symbols-outlined">warning</span>
                                * Пароль должен быть больше 6 символов
                            </h6>
                        )}
                    </label>
                    <label className="mt-2">
                        <input className={errors.password ? "auth-input-war" : "auth-input"}
                               placeholder="Имя *"
                               name="name"
                               {...register("name", {minLength: 6})}/>
                        {errors.name && (
                            <h6 className='warning-auth d-flex align-items-center'>
                                <span className="material-symbols-outlined">warning</span>
                                * Пароль должен быть больше 6 символов
                            </h6>
                        )}
                    </label>
                </div>
            </div>
            <Button className="mt-2 auth-btn" onClick={handleSubmit(registerUser)}>Зарегестрировать</Button>
            {authStore.loaderNotification && (
                <Notification text='Вы успешно Зарегестрировали аккаунт' icon='check_circle'/>
            )}
        </div>
    );
})