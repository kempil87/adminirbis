import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import Home from "./components/Home/Home";
import Championship from "./pages/Champ/Championship";
import ClubPage from "./pages/Club/ClubPage/ClubPage";
import NewsPage from "./pages/News/NewsPage/NewsPage";
import MediaPage from "./pages/Media/MediaPage";
import ShopPage from "./pages/Shop/ShopPage/ShopPage";
import Error from "./components/Error/Error";
import Auth from "./reg/auth/Auth";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import AddNews from "./pages/News/addNews/AddNews";
import EditNews from "./pages/News/editNews/EditNews";
import AddCLub from "./pages/Club/addClub/AddCLub";
import EditClub from "./pages/Club/editClub/EditClub";
import {Registration} from "./reg/registration/Registration";
import EditMedia from "./pages/Media/EditMedia";
import AddMedia from "./pages/Media/AddMedia";
import EditShop from "./pages/Shop/EditShop";
import AddShop from "./pages/Shop/AddShop";
import AddChamp from "./pages/Champ/AddChamp";
import EditChamp from "./pages/Champ/EditChamp";

function App() {
    const token = useSelector(state => state.token)
    const dispatch = useDispatch()

    const isAuth = () => {
        const t = localStorage.getItem("token")
        if (t) {
            dispatch({
                type: "ADD_TOKEN",
                payload: t
            })
        }
    }


    useEffect(() => {
        isAuth()
    }, [])

    return (
        <div className="App ">
            {token &&(
                <Header/>
            )}

            <div className="container" style={{marginTop: 76}}>
                <Routes>
                    {token   ? (
                        <>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/championship" element={<Championship/>}/>
                            <Route path="/addchampionship" element={<AddChamp/>}/>
                            <Route path="/editchampionship/:id" element={<EditChamp/>}/>
                            <Route path="/club" element={<ClubPage/>}/>
                            <Route path="/addclub" element={<AddCLub/>}/>
                            <Route path="/editclub/:id" element={<EditClub/>}/>
                            <Route path="/news" element={<NewsPage/>}/>
                            <Route path="/addnews" element={<AddNews/>}/>
                            <Route path="/editnews/:id" element={<EditNews/>}/>
                            <Route path="/editmedia/:id" element={<EditMedia/>}/>
                            <Route path="/addmedia" element={<AddMedia/>}/>
                            <Route path="/media" element={<MediaPage/>}/>
                            <Route path="/shop" element={<ShopPage/>}/>
                            <Route path="/addshop" element={<AddShop/>}/>
                            <Route path="/editshop/:id" element={<EditShop/>}/>
                            <Route  path="*" element={<Error/>}/>
                        </>

                        ):(
                            <>
                                <Route path="/" element={<Auth/>}/>
                                <Route path="/registration" element={<Registration/>}/>
                            </>
                        )}
                </Routes>
            </div>
        </div>
    );
}

export default App;
