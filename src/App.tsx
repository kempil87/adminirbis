import './App.css';
import * as React from "react";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import Home from "./pages/main/Home/Home";
import Championship from "./pages/main/Champ/Championship";
import ClubPage from "./pages/main/Club/ClubPage/ClubPage";
import NewsPage from "./pages/main/News/NewsPage/NewsPage";
import MediaPage from "./pages/main/Media/MediaPage";
import ShopPage from "./pages/main/Shop/ShopPage";
import Error from "./components/Error/Error";
import Auth from "./pages/reg/auth/Auth";
import {useEffect, useState} from "react";
import AddNews from "./pages/main/News/addNews/AddNews";
import EditNews from "./pages/main/News/editNews/EditNews";
import AddCLub from "./pages/main/Club/addClub/AddCLub";
import EditClub from "./pages/main/Club/editClub/EditClub";
import {Registration} from "./pages/reg/registration/Registration";
import EditMedia from "./pages/main/Media/EditMedia";
import AddMedia from "./pages/main/Media/AddMedia";
import EditShop from "./pages/main/Shop/EditShop";
import AddShop from "./pages/main/Shop/AddShop";
import AddChamp from "./pages/main/Champ/AddChamp";
import EditChamp from "./pages/main/Champ/EditChamp";
import {useRootStore} from "./base/hooks/useRootStore";
import {observer} from "mobx-react";

export const App = observer(() => {
    const {authStore} = useRootStore();

    const isAuth = () => {
        const localStorageToken = localStorage.getItem("token")
        if (localStorageToken) {
            authStore.setToken(localStorageToken)
        }
    }

    useEffect(() => {
        isAuth()
    }, [])

    useEffect(() => {
        isAuth()
    }, [authStore.token])

    return (
        <div className="App ">
            {authStore.token && (
                <Header/>
            )}

            <div className="container" style={{marginTop:authStore.token ? 76 :0, minHeight: "100vh"}}>
                <Routes>
                    {authStore.token ? (
                        <>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/championship" element={<Championship/>}/>
                            <Route path="/championship/add" element={<AddChamp/>}/>
                            <Route path="/championship/edit/:id" element={<EditChamp/>}/>
                            <Route path="/club" element={<ClubPage/>}/>
                            <Route path="/club/add" element={<AddCLub/>}/>
                            <Route path="/club/edit/:id" element={<EditClub/>}/>
                            <Route path="/news" element={<NewsPage/>}/>
                            <Route path="/news/add" element={<AddNews/>}/>
                            <Route path="/news/edit/:id" element={<EditNews/>}/>
                            <Route path="/media/edit/:id" element={<EditMedia/>}/>
                            <Route path="/media/add" element={<AddMedia/>}/>
                            <Route path="/media" element={<MediaPage/>}/>
                            <Route path="/shop" element={<ShopPage/>}/>
                            <Route path="/shop/add" element={<AddShop/>}/>
                            <Route path="/shop/edit/:id" element={<EditShop/>}/>
                            <Route path="*" element={<Error/>}/>
                        </>
                    ) : (
                        <>
                            <Route path="/" element={<Auth/>}/>
                            <Route path="/registration" element={<Registration/>}/>
                        </>
                    )}
                </Routes>
            </div>
        </div>
    );
})
