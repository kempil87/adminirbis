import React, {useEffect, useState} from 'react';
import './NewsPage.css'
import NewsCard from "../../../../components/cards/NewsCard/NewsCard";
import {Skeleton} from "../../../../components/ui/Loaders/Skeleton";
import {Link, useNavigate} from "react-router-dom";
import Notification from "../../../../components/ui/Notification/Notification";
import {observer} from "mobx-react";
import {useRootStore} from "../../../../base/hooks/useRootStore";
import {Table} from "react-bootstrap";
import {Button, Input, Modal, Pagination, Spin, Tooltip} from "antd";
import {DeleteOutlined,EditOutlined,SearchOutlined} from "@ant-design/icons";
import Search from "antd/lib/input/Search";

const NewsPage = observer(() => {
    const {newsStore} = useRootStore();
    const nav = useNavigate();

    const [searchNews, setSearchNews] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newsId, setNewsId] = useState('');
    const filterNews = newsStore.news.filter(n => {
        return n.title?.toLowerCase().includes(searchNews?.toLowerCase())
    })
    const showModal = (id) => {
        setNewsId(id)
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onSearch = (value: string) => {
        setSearchNews(value);
    };

    const goToEdit = (id) => {
        nav(`/news/edit/${id}`)
    };

    useEffect(() => {
        newsStore.getAllNews()
    }, [])

    return (
        <div className="pt-3">
            <div className="d-flex justify-content-between align-items-center">
                <h4 className="m-0">Все новости</h4>
                <div className='d-flex'>
                    <Link className="d-flex align-items-center m-2" to="/news/add"
                          style={{fontWeight: 300, textDecoration: "none", color: "gold"}}>
                        <Button>
                            Добавить новость
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="d-flex flex-column">
                {newsStore.loader ? (
                    <>
                        <div className='d-flex justify-content-center align-items-center' style={{marginTop: 16,height:'70vh'}}>
                            <Spin />
                        </div>
                    </>
                ) : (
                    <div>
                        <Table  bordered responsive>
                            <thead>
                            <tr>
                                <th>№</th>
                                <th>Фото</th>
                                <th>Дата</th>
                                <th>Описание
                                    <Input  placeholder="Поиск"
                                            allowClear onChange={(e) => onSearch(e.target.value)}
                                            style={{ width: 200 ,marginLeft:6}}
                                    />
                                </th>
                                <th>Действия</th>
                            </tr>
                            </thead>
                            {filterNews.length ? (
                                <tbody>
                                {filterNews.map((n,idx) => (
                                    <tr key={n._id}>
                                        <th>{idx + 1}</th>
                                        <th>
                                            <img alt='' width={65} height={70} style={{objectFit:'contain'}} src={n.image}/>
                                        </th>
                                        <th>{n.date}</th>
                                        <th>{n.title}</th>
                                        <th>
                                            <Tooltip title='Редактировать'>
                                                <EditOutlined onClick={() => goToEdit(n._id)} style={{fontSize:22,color:'black'}}/>
                                            </Tooltip>
                                            <Tooltip title='Удалить'>
                                                <DeleteOutlined
                                                    onClick={() => showModal(n._id)}
                                                    style={{fontSize:22,color:'black',marginLeft:12}}/>
                                            </Tooltip>
                                            </th>
                                    </tr>
                                ))}
                                </tbody>
                            ):(
                                <tbody>
                                <tr>
                                    <div className=' mt-5 '>Ничего не найдено <br/>
                                        Измените параметры фильтрации
                                    </div>
                                </tr>
                                </tbody>
                            )}
                        </Table>
                    </div>
                )}
            </div>
            <Pagination defaultCurrent={1} total={1} />
            <Modal okText={'Удалить'} cancelText={'Отмена'} title="Удалить новость ?" visible={isModalVisible} onOk={() => {
                newsStore.deleteNews(newsId)
                setIsModalVisible(false)
            }} onCancel={handleCancel}>
                <p>Удаленную новость не возможно будет восстановить</p>
            </Modal>

            {newsStore.loaderNotification && (
                <Notification text='Новость была успешно удалена' icon='check_circle'/>
            )}
        </div>
    );
});

export default NewsPage;