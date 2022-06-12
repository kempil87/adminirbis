import React from 'react';
import {useState} from "react";
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import {api} from "../../../../base/axios";
import Notification from "../../../../components/ui/Notification/Notification";
import "./AddNews.css"
import {Link} from "react-router-dom";
import {useEffect} from "react";

const AddNews = () => {
    const [news, setNews] = useState({
        title: "",
        date: "",
        image: "",
        badge: "",
        source: "",
        tag: "",
        shortSubTitle: "",
        subtitle: "",
    })

    const [showNote, setShowNote] = useState(false);
    const [cl, setCl] = useState([]);

    const addNews = () => {
        if (!!news.title && !news.date && !news.image) {
            alert('Заполните обязательные поля')
            return
        }

        api.post("/news/create", news).then((res) => {
            setShowNote(true)
            setTimeout(() => {
                setShowNote(false)
                clearFields()
            }, 2000)

        })
    }

    const clearFields = () => {
        window.location.reload();
    }
    const getClub = () => {
        api.get("/club").then((res) => {
            setCl(res.data)
        })
    }


    useEffect(() => {
        getClub()
    }, [])

    return (
        <>
            <div className="align-items-center d-flex back-link">
                <span className="material-symbols-outlined chevron_right">chevron_right</span>
                <Link to="/news" className="back">Назад</Link>
            </div>
            <div className="d-flex flex-column  align-items-center pt-5">

                <div className="col-6">

                    <label className="d-flex justify-content-between">
                        Название
                        <input
                            className='addnews-input'
                            value={news.title}
                            onChange={(e) => setNews({...news, title: e.target.value})}/>
                    </label>

                    <label className="d-flex justify-content-between">
                        Дата
                        <input
                            className='addnews-input'
                            value={news.date}
                            onChange={(e) => setNews({...news, date: e.target.value})}/>
                    </label>

                    <label className="d-flex justify-content-between">
                        Фото (url)
                        <input
                            className='addnews-input'
                            value={news.image}
                            onChange={(e) => setNews({...news, image: e.target.value})}/>
                    </label>

                    <label className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            Значок <OverlayTrigger
                            placement='top'
                            overlay={
                                <Tooltip id={`button-tooltip-2`}>Вид новости (поздравления,матч,событие и т.д)</Tooltip>
                            }
                        >
                            <span className=" material-symbols-outlined"> info</span>
                        </OverlayTrigger>
                        </div>
                        <input
                            className='addnews-input'
                            value={news.badge}
                            onChange={(e) => setNews({...news, badge: e.target.value})}/>
                    </label>

                    <label className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            Ссылка <OverlayTrigger
                            placement='top'
                            overlay={
                                <Tooltip id={`button-tooltip-2`}>
                                    Ссылка на игрока ,тренера,персонал,руководство (любой другой сайт)
                                </Tooltip>
                            }
                        >
                            <span className=" material-symbols-outlined"> info</span>
                        </OverlayTrigger>
                        </div>
                        <input
                            className='addnews-input'
                            value={news.source}
                            onChange={(e) => setNews({...news, source: e.target.value})}/>
                    </label>

                    <label className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            Тег <OverlayTrigger
                            placement='top'
                            overlay={
                                <Tooltip id={`button-tooltip-2`}>
                                    Имена связанные с новостью
                                </Tooltip>
                            }
                        >
                            <span className=" material-symbols-outlined"> info</span>
                        </OverlayTrigger>
                        </div>

                        <input
                            className='addnews-input'
                            value={news.tag}
                            onChange={(e) => setNews({...news, tag: e.target.value})}/>
                    </label>

                    <label className="d-flex justify-content-between">
                        Описание
                        <input
                            className='addnews-input'
                            value={news.subtitle}
                            onChange={(e) => setNews({...news, subtitle: e.target.value})}/>
                    </label>
                    <label className="d-flex justify-content-between">
                        крат.Описание
                        <input
                            className='addnews-input'
                            value={news.shortSubTitle}
                            onChange={(e) => setNews({...news, shortSubTitle: e.target.value})}/>
                    </label>
                </div>
                <Button className='col-6 mt-4 ' variant="dark" onClick={addNews}>Создать</Button>
                {showNote && (
                    <Notification text='Новость была успешно добавлена' icon='check_circle'/>
                )}

            </div>
            <div>
                <h5>Список ссылок</h5>
                <div>
                    {cl.map((i)=>(
                        <div key={i._id} className="d-flex id-list">
                            <h6>{i.name}</h6>
                            <h6>: {i._id}</h6>
                        </div>
                    ))}
                </div>

            </div>
        </>

    );
};

export default AddNews;