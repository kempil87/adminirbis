import React from 'react';
import "./Header.css"
import {useRootStore} from "../../base/hooks/useRootStore";
import {observer} from "mobx-react";
import {Settings} from "../settingsMenu/Settings";
import {Tooltip} from "antd";
import {LogoutOutlined} from "@ant-design/icons";

export const Header = observer(() => {
    const {authStore} = useRootStore();

    return (
        <div className='flex justify-between items-center px-2 w-full'>
            <h6 className='italic text-white'>#охотаначалась</h6>

            <div className='flex items-center'>
                <Settings/>
                <Tooltip title='Выйти'>
                    <LogoutOutlined
                        onClick={authStore.logout}
                        style={{
                            color: '#fff',
                            marginLeft: 12,
                            fontSize: 22,
                            cursor: 'pointer'
                        }}/>
                </Tooltip>
            </div>
        </div>
    );
});
