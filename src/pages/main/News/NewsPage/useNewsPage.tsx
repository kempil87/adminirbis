import {useRootStore} from "../../../../base/hooks/useRootStore";
import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {ConfirmModal} from "../../../../components/confirmModal/ConfirmModal";

export const useNewsPage = () => {
    const {newsStore} = useRootStore();

    useEffect(() => {
        newsStore.getAllNews()
    }, [])

    const columns = [
        {
            title: '№',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            width: 70,
            render: (_: any, i: any, idx: number) => (<div>{idx + 1}</div>)
        },
        {
            title: 'Фото',
            dataIndex: 'age',
            key: 'age',
            render: (_: any, i: any) => (
                <img className='object-cover rounded-[12px] w-[160px] h-16' alt={'Фото'} src={i.image}/>
            )
        },
        {
            title: 'Дата',
            align: 'center',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Описание',
            align: 'center',
            dataIndex: 'subtitle',
            key: 'subtitle',
        },
        {
            title: 'Действия',
            align: 'center',
            width: 160,
            dataIndex: 'address',
            key: 'operation',
            render: (_: any, i: any) => (
                <div className='flex space-x-3 items-center justify-center'>
                    <Link to={`/news/edit/${i._id}`}>
                        <EditOutlined className='w-4 h-4 text-black hover:opacity-80'/>
                    </Link>
                    <ConfirmModal onConfirm={() => {
                        newsStore.deleteNews(i._id)
                        newsStore.getAllNews()
                    }}
                    >
                        <DeleteOutlined className='w-4 h-4 cursor-pointer !text-red-400 hover:opacity-80'/>
                    </ConfirmModal>
                </div>
            )
        },
    ]
    return {newsStore, columns}
}