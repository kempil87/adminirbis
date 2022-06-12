import React from 'react';
import {Link} from "react-router-dom";
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import Notification from "../../../components/ui/Notification/Notification";
import {useState} from "react";
import {api} from "../../../base/axios";

const AddMedia = () => {

    const [media, setMedia] = useState({
        name: "",
        date: "",
        image: "",
        photograph: "",
        videoSource: "",
        all: ""
    })

    const [showNote, setShowNote] = useState(false);

    const addMedia = () => {
        if (!!media.title && !media.date && !media.image) {
            alert('Заполните обязательные поля')
            return
        }

        api.post("/media/create", media).then((res) => {
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

    return (
        <div>
            <div className="align-items-center d-flex back-link">
                <span className="material-symbols-outlined chevron_right">chevron_right</span>
                <Link to="/media" className="back">Назад</Link>
            </div>
            <div className="d-flex flex-column  align-items-center pt-5">

                <div className="col-6">

                    <label className="d-flex justify-content-between">
                        Название
                        <input
                            className='addnews-input'
                            value={media.name}
                            onChange={(e) => setMedia({...media, name: e.target.value})}/>
                    </label>

                    <label className="d-flex justify-content-between">
                        Дата
                        <input
                            className='addnews-input'
                            value={media.date}
                            onChange={(e) => setMedia({...media, date: e.target.value})}/>
                    </label>

                    <label className="d-flex justify-content-between">
                        Фото (url)
                        <input
                            className='addnews-input'
                            value={media.image}
                            onChange={(e) => setMedia({...media, image: e.target.value})}/>
                    </label>

                    <label className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            Все фото
                        </div>
                        <input
                            className='addnews-input'
                            value={media.all}
                            onChange={(e) => setMedia({...media, all: e.target.value})}/>
                    </label>

                    <label className="d-flex justify-content-between">
                        <div  className="d-flex align-items-center">
                           Видео Ссылка <OverlayTrigger

                            placement='top'
                            overlay={
                                <Tooltip  id={`button-tooltip-2`}>
                                    Ссылка на видео с события
                                </Tooltip>
                            }
                        >
                            <span className=" material-symbols-outlined"> info</span>
                        </OverlayTrigger>
                        </div>
                        <input
                            className='addnews-input'
                            value={media.videoSource}
                            onChange={(e) => setMedia({...media, videoSource: e.target.value})}/>
                    </label>

                    <label className="d-flex justify-content-between">
                        <div  className="d-flex align-items-center">
                            Фотограф
                        </div>

                        <input
                            className='addnews-input'
                            value={media.photograph}
                            onChange={(e) => setMedia({...media, photograph: e.target.value})}/>
                    </label>

                </div>
                <Button className='col-6 mt-4 ' variant="dark" onClick={addMedia}>Создать</Button>
                {showNote && (
                    <Notification text='Медиа была успешно добавлена' icon='check_circle'/>
                )}

            </div>
        </div>
    );
};

export default AddMedia;