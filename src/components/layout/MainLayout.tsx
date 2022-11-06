import React, {useState} from 'react';
import '../Header/Header.css'
import {Link, NavLink, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {Affix, Layout, Menu, MenuProps, Tooltip} from "antd";
import {Home} from "../../pages/main/Home/Home";
import AddTableClub from "../../pages/main/Champ/AddTableClub";
import EditTable from "../../pages/main/Champ/EditTable";
import Championship from "../../pages/main/Champ/Championship";
import AddChamp from "../../pages/main/Champ/AddChamp";
import EditChamp from "../../pages/main/Champ/EditChamp";
import ClubPage from "../../pages/main/Club/ClubPage/ClubPage";
import AddCLub from "../../pages/main/Club/addClub/AddCLub";
import EditClub from "../../pages/main/Club/editClub/EditClub";
import {NewsPage} from "../../pages/main/News/NewsPage/NewsPage";
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
import {useRootStore} from "../../base/hooks/useRootStore";
import {Statistics} from '../../pages/main/Statistics/Statistics';
import {Registration} from "../../pages/main/registration/Registration";
import {Profile} from '../../pages/main/Profile/Profile';
import {format} from 'date-fns';
import {MENU_ROUTES} from "../../routes/routes";
import {Header as HeaderFC} from '../../components/Header/Header'
import cn from "classnames";

const {Header, Content, Footer, Sider} = Layout;

export const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <Affix offsetTop={1}>
                    <div className='space-y-3 p-3'>
                        <Link
                            style={{textDecoration: "none"}}
                            to="/"
                            className="flex items-center justify-center"
                        >
                            <img
                                width="63"
                                height="70"
                                alt="Logo"
                                src="https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"/>
                        </Link>

                        <div className='flex flex-col items-center space-y-2.5'>
                            {MENU_ROUTES.map((i) => (
                                <NavLink
                                    key={i.path}
                                    className={cn('flex items-center bg-gray-800 text-white font-medium hover:opacity-80 gap-x-2 px-6 rounded-[10px] py-2 w-full',
                                        collapsed && 'justify-center')
                                    }
                                    to={i.path}
                                >
                                    {i.icon}
                                    {!collapsed && (
                                        <>
                                            {i.title}
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </Affix>
            </Sider>

            <Layout className="site-layout">
                <Header className="site-layout-background flex items-center py-6">
                    <HeaderFC/>
                </Header>

                <Content className='space-y-3 p-6'>
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

                <Footer className='text-center'>
                    {'Админ панель ФБК Ирбис' + ' ' + format(new Date(), 'yyyy')}
                </Footer>
            </Layout>
        </>
    );
};
