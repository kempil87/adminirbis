import './App.css';
import * as React from "react";
import {Route, Routes} from "react-router-dom";
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import {AuthPage} from "./pages/reg/auth/Auth";
import {observer} from "mobx-react";
import {MainLayout} from "./components/layout/MainLayout";
import {useCheckToken} from "./hooks/useCheckToken";

export const App = observer(() => {
    const {authStore} = useCheckToken();

    if (!authStore.token) {
        return (
            <Routes>
                <Route path="/" element={<AuthPage/>}/>
            </Routes>
        )
    }
    return (
        <Layout style={{minHeight: '100vh'}}>
            <MainLayout/>
        </Layout>
    );
})
