import React, {useState} from 'react';
import '../Header/Header.css'
import {Link, NavLink, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {Affix, Layout, Menu, MenuProps, Tooltip} from "antd";
import Home from "../../pages/main/Home/Home";
import AddTableClub from "../../pages/main/Champ/AddTableClub";
import EditTable from "../../pages/main/Champ/EditTable";
import Championship from "../../pages/main/Champ/Championship";
import AddChamp from "../../pages/main/Champ/AddChamp";
import EditChamp from "../../pages/main/Champ/EditChamp";
import ClubPage from "../../pages/main/Club/ClubPage/ClubPage";
import AddCLub from "../../pages/main/Club/addClub/AddCLub";
import EditClub from "../../pages/main/Club/editClub/EditClub";
import NewsPage from "../../pages/main/News/NewsPage/NewsPage";
import AddNews from "../../pages/main/News/addNews/AddNews";
import EditNews from "../../pages/main/News/editNews/EditNews";
import EditMedia from "../../pages/main/Media/EditMedia";
import AddMedia from "../../pages/main/Media/AddMedia";
import MediaPage from "../../pages/main/Media/MediaPage";
import ShopPage from "../../pages/main/Shop/ShopPage";
import AddShop from "../../pages/main/Shop/AddShop";
import EditShop from "../../pages/main/Shop/EditShop";
import Error from "../Error/Error";
import {
    LogoutOutlined,
    SettingOutlined,
    HomeOutlined,
    BarChartOutlined,
    ReadOutlined,
    TrophyOutlined,
    TeamOutlined,
    PlaySquareOutlined,
    ShoppingOutlined
} from '@ant-design/icons'
import {navMenu} from "./navMenu";
import {useRootStore} from "../../base/hooks/useRootStore";
import {Statistics} from '../../pages/main/Statistics/Statistics';
import {Registration} from "../../pages/main/registration/Registration";
import {Settings} from "../settingsMenu/Settings";
import { Profile } from '../../pages/main/Profile/Profile';
import { format } from 'date-fns';

const {Header, Content, Footer, Sider} = Layout;


export const MainLayout = () => {
    const location = useLocation()
    const nav = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const {authStore} = useRootStore();

    const logout = () => {
        authStore.logout()
        nav('/')
    }
    return (
        <>

               <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                   <Affix>
                       <div className="logo">
                           <Link
                               style={{textDecoration: "none"}}
                               to="/"
                               className="d-flex align-items-center justify-content-center mt-3"
                           >
                               <img className="irbis-logo" width="63" height="70"
                                    alt="irbis"
                                    src="https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"/>
                           </Link>
                       </div>
                       {!collapsed ? (
                           <div className='d-flex flex-column align-items-center mt-3'>
                               {navMenu.map((i) => (
                                   <div key={i.key} className='d-flex  align-items-center w-100'>
                                       <NavLink
                                           className={location.pathname === i.path ? "nav-link-header-active" : "nav-link-header"}
                                           to={i.path}
                                       >{i.title}</NavLink>
                                   </div>
                               ))}
                           </div>
                       ) : (
                           <div className='d-flex flex-column align-items-center mt-3 px-2'>
                               <NavLink className={location.pathname === '/' ? "nav-link-header-active" : "nav-link-header"}
                                        to={'/'}>
                                   <HomeOutlined style={{fontSize: 18}}/>
                               </NavLink>
                               <NavLink
                                   className={location.pathname === '/news' ? "nav-link-header-active" : "nav-link-header"}
                                   to={'/news'}>
                                   <ReadOutlined style={{fontSize: 18}}/>
                               </NavLink>
                               <NavLink
                                   className={location.pathname === '/championship' ? "nav-link-header-active" : "nav-link-header"}
                                   to={'/championship'}>
                                   <TrophyOutlined style={{fontSize: 18}}/>
                               </NavLink>
                               <NavLink
                                   className={location.pathname === '/club' ? "nav-link-header-active" : "nav-link-header"}
                                   to={'/club'}>
                                   <TeamOutlined style={{fontSize: 18}}/>
                               </NavLink>
                               <NavLink
                                   className={location.pathname === '/media' ? "nav-link-header-active" : "nav-link-header"}
                                   to={'/media'}>
                                   <PlaySquareOutlined style={{fontSize: 18}}/>
                               </NavLink>
                               <NavLink
                                   className={location.pathname === '/statistics' ? "nav-link-header-active" : "nav-link-header"}
                                   to={'/statistics'}>
                                   <BarChartOutlined style={{fontSize: 18}}/>
                               </NavLink>
                               <NavLink
                                   className={location.pathname === '/shop' ? "nav-link-header-active" : "nav-link-header"}
                                   to={'/shop'}>
                                   <ShoppingOutlined style={{fontSize: 18}}/>
                               </NavLink>
                           </div>
                       )}
                   </Affix>
               </Sider>

            <Layout className="site-layout">
                <Header className="site-layout-background d-flex align-items-center" style={{padding: 0, height: 80}}>
                    <div className='d-flex justify-content-between align-items-center px-5 w-100 '>
                        <h6 style={{color: '#fff', fontStyle: 'italic'}}>#охотаначалась</h6>
                        <div className='d-flex align-items-center'>
                            <Settings/>
                            <Tooltip title='Выйти'>
                                <LogoutOutlined onClick={logout} style={{color: '#fff',marginLeft:12, fontSize: 22, cursor: 'pointer'}}/>
                            </Tooltip>
                        </div>
                    </div>
                </Header>
                <Content style={{margin: '0 16px', color: "black"}}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/championship/table" element={<AddTableClub/>}/>
                        <Route path="/championship/table/edit" element={<EditTable/>}/>
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
                        <Route path="/statistics" element={<Statistics/>}/>
                        <Route path="*" element={<Error/>}/>
                        <Route path="/registration" element={<Registration/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                    </Routes>
                </Content>
                <Footer
                    style={{textAlign: 'center'}}>{'Админ панель ФБК Ирбис' + ' ' + format(new Date(),'yyyy')}</Footer>
            </Layout>
        </>
    );
};
