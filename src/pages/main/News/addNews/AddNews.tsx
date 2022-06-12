import React from 'react';
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import Notification from "../../../../components/ui/Notification/Notification";
import "./AddNews.css"
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {observer} from "mobx-react";
import {useRootStore} from "../../../../base/hooks/useRootStore";

const AddNews = observer(() => {

    const {newsStore} = useRootStore();

    const {register, handleSubmit, reset} = useForm();

    const addNews = (data) => {
        newsStore.addNews(data).then(() => reset())
    }


    // const getClub = () => {
    //     api.get("/club").then((res) => {
    //         setCl(res.data)
    //     })
    // }

    //
    // useEffect(() => {
    //     getClub()
    // }, [])

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
                        <input {...register("title")} className='addnews-input'/>
                    </label>

                    <label className="d-flex justify-content-between">
                        Дата
                        <input
                            {...register("date")}
                            className='addnews-input'/>
                    </label>

                    <label className="d-flex justify-content-between">
                        Фото (url)
                        <input
                            className='addnews-input'
                            {...register("image")}/>
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
                            {...register("badge")}/>
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
                            {...register("source")}/>
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
                            {...register("tag")}/>
                    </label>

                    <label className="d-flex justify-content-between">
                        Описание
                        <input
                            className='addnews-input'
                            {...register("subtitle")}/>
                    </label>
                    <label className="d-flex justify-content-between">
                        крат.Описание
                        <input
                            className='addnews-input'
                            {...register("shortSubTitle")}/>
                    </label>
                </div>
                <Button className='col-6 mt-4 ' variant="dark" onClick={handleSubmit(addNews)}>Создать</Button>

                {newsStore.loaderNotification && (
                    <Notification text='Новость была успешно добавлена' icon='check_circle'/>
                )}

            </div>

            {/*<div>*/}
            {/*    <h5>Список ссылок</h5>*/}
            {/*    <div>*/}
            {/*        {cl.map((i)=>(*/}
            {/*            <div key={i._id} className="d-flex id-list">*/}
            {/*                <h6>{i.name}</h6>*/}
            {/*                <h6>: {i._id}</h6>*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}

            {/*</div>*/}
        </>

    );
});


export default AddNews;