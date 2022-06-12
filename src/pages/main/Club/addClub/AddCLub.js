import React, {useEffect} from 'react';
import './AddClub.css'
import {Link} from "react-router-dom";
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import Notification from "../../../../components/ui/notification";
import {useState} from "react";
import {api} from "../../../../base/axios";

const AddCLub = () => {

    const [club, setClub] = useState({
        name: "",
        number: "",
        image: "",
        mainImage: "",
        position: "",
        job: "",
        dateBirthday: "",
        height: "",
        weight: "",
        country: "",
        grip: "",
        games: "",
        goals: "",
        assist: "",
        score: "",
        boxTime: "",
        plusMinus: "",
        wins: "",
        saves: "",
        safety: "",
        dryGames: "",
        personalInfo: "",
        shortPersonalInfo: ""
    })
    const [showNote, setShowNote] = useState(false);

    const addClub = () => {
        api.post("/club/create", club).then((res) => {
            setShowNote(true)
            setTimeout(() => {
                setShowNote(false)
                // clearFields()
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
                <Link to="/club" className="back">Назад</Link>
            </div>
            <div className="d-flex flex-column  align-items-center pt-5">

                <div className="d-flex  input-container">
                    <div>
                        <label className="d-flex justify-content-between">
                            Имя Фамилия
                            <input
                                className='addnews-input'
                                value={club.name}
                                onChange={(e) => setClub({...club, name: e.target.value})}/>
                        </label>

                        <label className="d-flex justify-content-between">
                            Номер
                            <input
                                className='addnews-input'
                                value={club.number}
                                onChange={(e) => setClub({...club, number: e.target.value})}/>
                        </label>

                        <label className="d-flex justify-content-between">
                            Фото с матча(url)
                            <input
                                className='addnews-input'
                                value={club.image}
                                onChange={(e) => setClub({...club, image: e.target.value})}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Фото лица(url)
                            <input
                                className='addnews-input'
                                value={club.mainImage}
                                onChange={(e) => setClub({...club, mainImage: e.target.value})}/>
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
                                value={club.position}
                                onChange={(e) => setClub({...club, position: e.target.value})}/>
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
                                value={club.job}
                                onChange={(e) => setClub({...club, job: e.target.value})}/>
                        </label>

                        <label className="d-flex justify-content-between">
                            Дата рождения
                            <input
                                className='addnews-input'
                                value={club.dateBirthday}
                                onChange={(e) => setClub({...club, dateBirthday: e.target.value})}/>
                        </label>

                        <label className="d-flex justify-content-between">
                            Рост
                            <input
                                className='addnews-input'
                                value={club.height}
                                onChange={(e) => setClub({...club, height: e.target.value})}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Вес
                            <input
                                className='addnews-input'
                                value={club.weight}
                                onChange={(e) => setClub({...club, weight: e.target.value})}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Страна
                            <input
                                className='addnews-input'
                                value={club.country}
                                onChange={(e) => setClub({...club, country: e.target.value})}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Хват
                            <input
                                className='addnews-input'
                                value={club.grip}
                                onChange={(e) => setClub({...club, grip: e.target.value})}/>
                        </label>

                    </div>
                    <div>
                        <label className="d-flex justify-content-between">
                            Игры
                            <input
                                className='addnews-input'
                                value={club.games}
                                onChange={(e) => setClub({...club, games: e.target.value})}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Голы
                            <input
                                className='addnews-input'
                                value={club.goals}
                                onChange={(e) => setClub({...club, goals: e.target.value})}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Передачи
                            <input
                                className='addnews-input'
                                value={club.assist}
                                onChange={(e) => setClub({...club, assist: e.target.value})}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Очки
                            <input
                                className='addnews-input'
                                value={club.score}
                                onChange={(e) => setClub({...club, score: e.target.value})}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Штр.время
                            <input
                                className='addnews-input'
                                value={club.boxTime}
                                onChange={(e) => setClub({...club, boxTime: e.target.value})}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Плюс/минус
                            <input
                                className='addnews-input'
                                value={club.plusMinus}
                                onChange={(e) => setClub({...club, plusMinus: e.target.value})}/>
                        </label>

                        <label className="d-flex justify-content-between">
                            Победы(вр)
                            <input
                                className='addnews-input'
                                value={club.wins}
                                onChange={(e) => setClub({...club, wins: e.target.value})}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Сейвы(вр)
                            <input
                                className='addnews-input'
                                value={club.saves}
                                onChange={(e) => setClub({...club, saves: e.target.value})}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Коэф.надежности(вр)
                            <input
                                className='addnews-input'
                                value={club.safety}
                                onChange={(e) => setClub({...club, safety: e.target.value})}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Сухие игры(вр)
                            <input
                                className='addnews-input'
                                value={club.dryGames}
                                onChange={(e) => setClub({...club, dryGames: e.target.value})}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Перс.информация
                            <input
                                className='addnews-input'
                                value={club.personalInfo}
                                onChange={(e) => setClub({...club, personalInfo: e.target.value})}/>
                        </label>
                        <label className="d-flex justify-content-between">
                            Краткая перс.информация
                            <input
                                className='addnews-input'
                                value={club.shortPersonalInfo}
                                onChange={(e) => setClub({...club, shortPersonalInfo: e.target.value})}/>
                        </label>
                    </div>
                </div>
                <Button className='col-3 mt-4 border-light' variant="dark" onClick={addClub}>Создать</Button>
                <Button className='col-3 mt-2 border-light' variant="dark" onClick={clearFields}>Очистить</Button>
                {showNote && (
                    <Notification text='Игрок был успешно добавлен' icon='check_circle'/>
                )}

            </div>
        </div>
    );
};

export default AddCLub;