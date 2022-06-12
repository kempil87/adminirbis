import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from 'react';
import {api} from "../../../base/axios";
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";

const EditMedia = () => {

    const {id} = useParams()
    const navigate = useNavigate();

    const [media, setMedia] = useState({});

    const getNews = () => {
        api.get(`/media/${id}`).then((res) =>{
            setMedia(res.data)
        })
    }

    const sendEditMedia = () =>{
        api.post(`/media/update`, media).then((res) =>{
            navigate('/media');

        })
    }

    useEffect(() => {
        getNews()
    }, [id])

    return (
        <div className='d-flex align-items-center  pt-5 flex-column '>
            <div className="w-50">

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
                    <div className="d-flex align-items-center">
                        Видео Ссылка <OverlayTrigger
                        placement='top'
                        overlay={
                            <Tooltip id={`button-tooltip-2`}>
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
                    <div className="d-flex align-items-center">
                        Фотограф
                    </div>

                    <input
                        className='addnews-input'
                        value={media.photograph}
                        onChange={(e) => setMedia({...media, photograph: e.target.value})}/>
                </label>

            </div>
            <Button className='mt-5 col-4' variant="light" onClick={sendEditMedia}>Сохранить</Button>
        </div>
    );
};

export default EditMedia;