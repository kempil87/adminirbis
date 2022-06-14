import React from 'react';
import './AddClub.css'
import {Link} from "react-router-dom";
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import Notification from "../../../../components/ui/Notification/Notification";
import {useRootStore} from "../../../../base/hooks/useRootStore";
import {useForm} from "react-hook-form";
import {observer} from "mobx-react";

const AddCLub =observer( () => {

    const {clubStore} = useRootStore();

    const {register, handleSubmit} = useForm();

    const addClub = (data) => {
        clubStore.addClub(data)
    }
    const clearFields = () => {
        window.location.reload();
    }

    return (
        <div>
            <div className="align-items-center d-flex back-link">
                <span className="material-symbols-outlined chevron_right">chevron_right</span>
                <Link to="/club" className="back">Назад</Link>
            </div>
            <div className="d-flex flex-column  align-items-center pt-5">

                <div className="d-flex  input-container">
                    <div>
                        <label className="d-flex justify-content-between">
                            Имя Фамилия
                            <input
                                className='addnews-input'
                                {...register("name")}/>
                        </label>

                        <label className="d-flex justify-content-between">
                            Номер
                            <input
                                className='addnews-input'
                                {...register("number")}/>
                        </label>

                        <label className="d-flex justify-content-between">
                            Фото с матча(url)
                            <input
                                className='addnews-input'
                                {...register("image")}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Фото лица(url)
                            <input
                                className='addnews-input'
                                {...register("mainImage")}/>
                        </label>

                        <label className="d-flex justify-content-between">
                            Амплуа <OverlayTrigger
                            placement='top'
                            overlay={
                                <Tooltip id={`button-tooltip-2`}>
                                    Амплуа игрока или должность отображаемая на сайте
                                </Tooltip>
                            }
                        >
                            <span className=" material-symbols-outlined"> info</span>
                        </OverlayTrigger>
                            <input
                                className='addnews-input'
                                {...register("position")}/>
                        </label>

                        <label className="d-flex justify-content-between">
                            Позиция(и.т.р)
                            <OverlayTrigger
                                placement='top'
                                overlay={
                                    <Tooltip id={`button-tooltip-2`}>
                                        Указать позицию сотрудника(игрока) (Вратарь,защитник,нападающий,Тренер или
                                        Менеджер)
                                    </Tooltip>
                                }
                            >
                                <span className=" material-symbols-outlined"> info</span>
                            </OverlayTrigger>
                            <input
                                className='addnews-input'
                                {...register("job")}/>
                        </label>

                        <label className="d-flex justify-content-between">
                            Дата рождения
                            <input
                                className='addnews-input'
                                {...register("dateBirthday")}/>
                        </label>

                        <label className="d-flex justify-content-between">
                            Рост
                            <input
                                className='addnews-input'
                                {...register("height")}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Вес
                            <input
                                className='addnews-input'
                                {...register("weight")}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Страна
                            <input
                                className='addnews-input'
                                {...register("country")}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Хват
                            <input
                                className='addnews-input'
                                {...register("grip")}/>
                        </label>

                    </div>
                    <div>
                        <label className="d-flex justify-content-between">
                            Игры
                            <input
                                className='addnews-input'
                                {...register("games")}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Голы
                            <input
                                className='addnews-input'
                                {...register("goals")}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Передачи
                            <input
                                className='addnews-input'
                                {...register("assist")}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Очки
                            <input
                                className='addnews-input'
                                {...register("score")}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Штр.время
                            <input
                                className='addnews-input'
                                {...register("boxTime")}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Плюс/минус
                            <input
                                className='addnews-input'
                                {...register("plusMinus")}/>
                        </label>

                        <label className="d-flex justify-content-between">
                            Победы(вр)
                            <input
                                className='addnews-input'
                                {...register("wins")}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Сейвы(вр)
                            <input
                                className='addnews-input'
                                {...register("saves")}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Коэф.надежности(вр)
                            <input
                                className='addnews-input'
                                {...register("safety")}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Сухие игры(вр)
                            <input
                                className='addnews-input'
                                {...register("dryGames")}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Перс.информация
                            <input
                                className='addnews-input'
                                {...register("personalInfo")}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Краткая перс.информация
                            <input
                                className='addnews-input'
                                {...register("shortPersonalInfo")}/>
                        </label>
                    </div>
                </div>
                <Button className='col-3 mt-4 border-light' variant="dark" onClick={handleSubmit(addClub)}>Создать</Button>
                <Button className='col-3 mt-2 border-light' variant="dark" onClick={clearFields}>Очистить</Button>
                {clubStore.loaderNotification && (
                    <Notification text='Игрок был успешно добавлен' icon='check_circle'/>
                )}

            </div>
        </div>
    );
});

export default AddCLub;