import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import "./Header.css"
import {useRootStore} from "../../base/hooks/useRootStore";
import {observer} from "mobx-react";

export const Header = observer(({setTheme, theme}) => {
    const {authStore} = useRootStore();

    const logout = () => {
        authStore.logout()
    }

    return (
        <div className="position-fixed head" style={{width: '100%', top: 0}}>
            <Navbar>
                <div className="d-flex container header-content">
                    <Nav className="">
                        <NavLink className="nav-link-header" to="/">Главная</NavLink>
                        <NavLink className="nav-link-header" to="/news">Новости</NavLink>
                        <NavLink className="nav-link-header" to="/championship">Чемпионат</NavLink>
                    </Nav>
                    <Link style={{textDecoration: "none"}} to="/" className=" d-flex align-items-center ">
                        <img className="irbis-logo" width="53" height="60"
                             alt="irbis"
                             src="https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"/>
                        <h6 className="header-hash ">Администратор</h6>
                    </Link>

                    <Nav className="">
                        <NavLink className="nav-link-header" to="/club">Клуб</NavLink>
                        <NavLink className="nav-link-header" to="/media">Медиа</NavLink>
                        <NavLink className="nav-link-header" to="/shop">Магазин</NavLink>
                        <span style={{cursor: "pointer"}}
                              onClick={() => setTheme()} className="material-symbols-outlined">
                                {theme ? 'light_mode' : 'nightlight'}
                        </span>
                        <Link onClick={logout} className="nav-link-header d-flex align-items-center" to="/">Выйти <span
                            className="material-symbols-outlined">person</span>
                        </Link>
                    </Nav>
                </div>
            </Navbar>
        </div>
    );
});
