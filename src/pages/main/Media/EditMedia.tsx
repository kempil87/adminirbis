import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect} from 'react';
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import {useRootStore} from "../../../base/hooks/useRootStore";
import {useForm} from "react-hook-form";
import Notification from "../../../components/ui/Notification/Notification";
import {observer} from "mobx-react";

const EditMedia = observer(() => {

    const {id} = useParams()

    const {mediaStore} = useRootStore()
    const {register, handleSubmit, setValue} = useForm();

    const setFormValues = () =>{
        Object.keys(mediaStore.mediaItem).forEach((key) => {
            // @ts-ignore
            setValue(String(key), mediaStore.mediaItem[key])
        })
    }

    const getMedia = (id) =>{
        mediaStore.getMedia(id)
    }

    const sendEditMedia = (data) =>{
        mediaStore.editMedia(data)
    }

    useEffect(() => {
        mediaStore.getMedia(id).then(() => setFormValues())
    }, [])

    return (
        <div className='d-flex align-items-center  pt-5 flex-column '>
            <div className="w-50">

                <label className="d-flex justify-content-between">
                    Название
                    <input
                        className='addnews-input'
                        {...register("name")}/>
                </label>

                <label className="d-flex justify-content-between">
                    Дата
                    <input
                        type='date'
                        className='addnews-input'
                        {...register("date")}/>
                </label>

                <label className="d-flex justify-content-between">
                    Фото (url)
                    <input
                        className='addnews-input'
                        {...register("image")}/>
                </label>

                <label className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        Все фото
                    </div>
                    <input
                        className='addnews-input'
                        {...register("all")}/>
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
                        {...register("videoSource")}/>
                </label>

                <label className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        Фотограф
                    </div>

                    <input
                        className='addnews-input'
                        {...register("photograph")}/>
                </label>

            </div>
            <Button className='mt-5 col-4' variant="light" onClick={handleSubmit(sendEditMedia)}>Сохранить</Button>
            {mediaStore.loaderNotification &&(
                <Notification text='Товар был успешно отредактирован' icon='check_circle'/>
            )}
        </div>
    );
});

export default EditMedia;