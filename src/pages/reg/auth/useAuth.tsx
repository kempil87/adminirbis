import {useRootStore} from "../../../base/hooks/useRootStore";
import {useForm} from "react-hook-form";
import {useEffect} from "react";

interface AuthForm {
    email: string,
    password: string
}

export const useAuth = () => {
    const {authStore} = useRootStore();

    const formMethods = useForm<AuthForm>(
        {
            defaultValues: {email: 'glebxok@mail.com', password: '12341234'},
            mode: 'onSubmit',
        });

    const authUser = async (data: AuthForm) => {
        console.log(data)
        await authStore.authLogin(data)
    }

    useEffect(() => {
        formMethods.setValue('email', 'glebxok@mail.com')
        formMethods.setValue('password', '12341234')
    }, [])


    return {formMethods, authUser, authStore}
}