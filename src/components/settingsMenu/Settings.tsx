import React, {useEffect, useState} from 'react';
import {SettingOutlined} from "@ant-design/icons";
import {Avatar, Divider, Dropdown, Menu, Tooltip} from "antd";
import {Link} from "react-router-dom";

export const Settings = () => {
    const [userMail,setUserMail] =useState('')


    useEffect(() =>{
        const user = window.localStorage.getItem('email')
        setUserMail(user)
    },[])


    const menu = (
        <Menu className='p-3' >
           <div className="d-flex align-items-center">
               <Avatar>МГ</Avatar>
               <div className='px-2'>
                   Макаров Глеб <br/> {userMail}
               </div>
           </div>
            <Menu.Item>
                <Divider className='m-0'/>
                <Link to={'/profile'}>Профиль</Link>
            </Menu.Item>
            {userMail === 'glebxok@mail.com' &&(
                <Menu.Item>
                    <Divider className='m-0'/>
                    <Link to={'/registration'}> Создать аккаунт</Link>
                </Menu.Item>
            )}
        </Menu>
    )

    return (
        <Dropdown placement={"bottomRight"} overlay={menu} trigger={['click']}>
            <Tooltip title='Настройки' >
                <SettingOutlined onClick={() =>{}} style={{color: '#fff', fontSize: 22, cursor: 'pointer'}}/>
            </Tooltip>
        </Dropdown>

    );
};
