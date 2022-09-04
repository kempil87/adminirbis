import './App.css';
import * as React from "react";
import { Route, Routes} from "react-router-dom";
import 'antd/dist/antd.css';
import {Layout, Menu } from 'antd';
import Auth from "./pages/reg/auth/Auth";
import {useEffect, useState} from "react";
import {Registration} from "./pages/main/registration/Registration"
import {useRootStore} from "./base/hooks/useRootStore";
import {observer} from "mobx-react";
import {MainLayout} from "./components/layout/MainLayout";



export const App = observer(() => {
    const [theme, setTheme] = useState(false)
    const {authStore} = useRootStore();

    const isAuth = () => {
        const localStorageToken = localStorage.getItem("token")
        if (localStorageToken) {
            authStore.setToken(localStorageToken)
        }
    }
    const changeTheme = () => {
        setTheme(!theme)
    }

    useEffect(() => {
        isAuth()
    }, [])

    useEffect(() => {
        isAuth()
    }, [authStore.token])


    return (
        <div className={!theme ? 'App' : 'App-light'}>
            {authStore.token ? (
                <Layout style={{ minHeight: '100vh' }}>
                    <MainLayout/>
                </Layout>
            ):(
                <Routes>
                    <Route path="/" element={<Auth/>}/>
                </Routes>
            )}
        </div>
    );
})
