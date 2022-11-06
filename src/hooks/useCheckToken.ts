import {useRootStore} from "../base/hooks/useRootStore";
import {useEffect} from "react";

export const useCheckToken = () => {
    const {authStore} = useRootStore();

    const isAuth = () => {
        const localStorageToken = localStorage.getItem("token")
        if (localStorageToken) {
            authStore.setToken(localStorageToken)
        }
    }

    useEffect(() => {
        isAuth()
    }, [authStore.token])

    return {authStore}
}