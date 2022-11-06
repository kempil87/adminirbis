import React from 'react';
import {Table} from "antd";

interface TableAntdProps {
    columns:any,
    data?:any[],
    loading?:boolean,
    scroll?:number
}

export const TableAntd = ({columns, data = [], loading = false, scroll = 1500}:TableAntdProps) => {
    return (
        <>
            <Table sticky
                   columns={columns}
                   dataSource={data.map((i) => ({...i,key: i._id}))}
                   loading={loading}
                   locale={{emptyText: 'Ничего не найдено'}}
                   pagination={false}
                   rowKey={(i) => i.id}
                   scroll={{x:scroll}}
                   size='small'
            />
        </>
    );
};
