import * as React from "react";
import {FormProvider} from "react-hook-form";
import {observer} from "mobx-react";
import {CustomInput} from "../../../components/form-elements/CustomInput";
import {CustomButton} from "../../../components/customButton/CustomButton";
import {useAuth} from "./useAuth";

export const AuthPage = observer(() => {
    const {authStore, authUser, formMethods} = useAuth()

    return (
        <div className='h-screen items-center flex justify-center'>
            <FormProvider {...formMethods}>
                <div className='w-[20vw] space-y-5 items-center p-16 bg-white rounded-lg border'>
                    <div className='text-black font-bold text-xl text-center'>Авторизация</div>

                    <CustomInput
                        placeholder="Почта"
                        label="Почта"
                        type="email"
                        rules={{
                            required: {value: true, message: 'Обязательное поле *'},
                            minLength: {value: 4, message: 'Почта должна быть больше 4 символов'},
                        }}
                        name={'email'}
                    />

                    <CustomInput
                        placeholder="Пароль"
                        label="Пароль"
                        type="password"
                        rules={{
                            required: {value: true, message: 'Обязательное поле *'},
                            minLength: {value: 6, message: 'Пароль должен быть больше 6 символов'},
                        }}
                        name='password'
                    />

                    <div className='flex justify-center'>
                        <CustomButton
                            loading={authStore.loader}
                            onClick={formMethods.handleSubmit(authUser)}
                        >
                            Войти
                        </CustomButton>
                    </div>
                </div>
            </FormProvider>
        </div>
    );
});
