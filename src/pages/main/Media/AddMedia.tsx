import React from 'react';
import {Link} from "react-router-dom";
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import Notification from "../../../components/ui/Notification/Notification";
import {useRootStore} from "../../../base/hooks/useRootStore";
import {useForm} from "react-hook-form";
import {observer} from "mobx-react";

const AddMedia =observer( () => {
    const {mediaStore} = useRootStore();

    const {register, handleSubmit,formState: {errors}} = useForm(
        {
            mode: 'onSubmit',
            reValidateMode: 'onSubmit',
        });


    const addMedia = (data) => {
        mediaStore.addMedia(data)
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
                        <div className='d-flex flex-column'>

                            {errors.name &&(
                                <h6 style={{fontSize:11,color:'red' ,opacity:0.9}}>Слишком короткое название</h6>
                            )}
                            <input

                                className='addnews-input'
                                {...register("name",{minLength:3})}/>
                        </div>

                    </label>

                    <label className="d-flex justify-content-between">
                        Дата
                        <input
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
                            {...register("videoSource")}/>
                    </label>

                    <label className="d-flex justify-content-between">
                        <div  className="d-flex align-items-center">
                            Фотограф
                        </div>

                        <input
                            className='addnews-input'
                            {...register("photograph")}/>
                    </label>

                </div>
                <Button className='col-6 mt-4 ' variant="dark" onClick={handleSubmit(addMedia)}>Создать</Button>
                {mediaStore.loaderNotification && (
                    <Notification text='Медиа была успешно добавлена' icon='check_circle'/>
                )}

            </div>
        </div>
    );
});


export default AddMedia;