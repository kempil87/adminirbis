import React, {PropsWithChildren} from 'react';
import {Breadcrumb, Card} from "antd";
import {Link} from "react-router-dom";
import {LeftOutlined} from "@ant-design/icons";

interface CustomPageHeaderProps extends PropsWithChildren {
    title: string,
    breadcrumbs: Breadcrumbs[],
}

interface Breadcrumbs {
    path?: string
    title: string
}

export const CustomPageHeader = ({title, children, breadcrumbs}: CustomPageHeaderProps) => {
    const homeLink = {path: '/', title: 'Главная'}

    return (
        <Card>
            <Breadcrumb>
                {[homeLink, ...breadcrumbs].map(({path, title}) => (
                    <Breadcrumb.Item key={path}>
                        {path
                            ? <Link className='font-medium' to={path}>{title}</Link>
                            : <span className='font-medium'>{title}</span>
                        }
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
            <div className='flex items-center justify-between'>
                <span className='text-[20px] font-medium'>
                    {title}
                </span>
                {children}
            </div>
        </Card>
    );
};
