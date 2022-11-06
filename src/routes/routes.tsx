import React, {ReactNode} from "react";
import {Home} from "../pages/main/Home/Home";
import {NewsPage} from "../pages/main/News/NewsPage/NewsPage";
import {NavLink} from "react-router-dom";
import {
    BarChartOutlined,
    HomeOutlined,
    PlaySquareOutlined,
    ReadOutlined, ShoppingOutlined,
    TeamOutlined,
    TrophyOutlined
} from "@ant-design/icons";

export interface RouteProps {
    component: ReactNode;
    path: string;
    hasNotification?: boolean;
    icon?: ReactNode;
    roleAccess?: string[];
    title?: string;
}

export const MENU_ROUTES: RouteProps[] = [
    {
        path: '/',
        icon: <HomeOutlined/>,
        title: 'Главная',
        component: <Home/>
    },
    {
        path: '/news',
        icon: <ReadOutlined/>,
        title: 'Новости',
        component: <NewsPage/>
    },
    {
        path: '/championship',
        title: 'Чемпионат',
        icon: <TrophyOutlined/>,
        component: <Home/>
    },
    {
        path: '/club',
        icon: <TeamOutlined/>,
        title: 'Клуб',
        component: <Home/>
    },
    {
        path: '/media',
        icon: <PlaySquareOutlined/>,
        title: 'Медиа',
        component: <Home/>
    },
    {
        path: '/statistics',
        icon: <BarChartOutlined/>,
        title: 'Статистика',
        component: <Home/>
    },
    {
        path: '/shop',
        icon: <ShoppingOutlined/>,
        title: 'Магазин',
        component: <Home/>
    },
];

const HIDE_ROUTES: RouteProps[] = [];