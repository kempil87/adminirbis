import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useRootStore} from "../../../base/hooks/useRootStore";
import {useForm} from "react-hook-form";
import {Button} from "react-bootstrap";
import Notification from "../../../components/ui/Notification/Notification";

const EditChamp = () => {
    const {id} = useParams()

    const {championshipStore} = useRootStore()
    const {register, handleSubmit, setValue} = useForm();

    const setFormValues = () =>{
        Object.keys(championshipStore.champItem).forEach((key) => {
            // @ts-ignore
            setValue(String(key), championshipStore.champItem[key])
        })
    }

    const getChampionship = (id) =>{
        championshipStore.getChampionship(id)
    }

    const sendEditChamp = (data) =>{
        championshipStore.editChampionship(data)
    }

    useEffect(() => {
        championshipStore.getChampionship(id).then(() => setFormValues())
    }, [])
    return (
        <div>
            <div className="align-items-center d-flex back-link">
                <span className="material-symbols-outlined chevron_right">chevron_right</span>
                <Link to="/championship" className="back">Назад</Link>
            </div>
            <div className="d-flex flex-column  align-items-center pt-5">
                <div className="col-6">
                    <label className="d-flex justify-content-between">
                        Назначение матча
                        <input
                            {...register("value")}
                            className='addnews-input'/>
                    </label>

                    <label className="d-flex justify-content-between">
                        счет (Домашняя)
                        <input
                            {...register("scoreHome")}
                            className='addnews-input'/>
                    </label>

                    <label className="d-flex justify-content-between">
                        счет (Гостевая)
                        <input
                            {...register("scoreGuest")}
                            className='addnews-input'/>
                    </label>

                    <label className="d-flex justify-content-between">
                        Лого (Домашняя)
                        <input
                            {...register("homeLogo")}
                            className='addnews-input'/>
                    </label>

                    <label className="d-flex justify-content-between">
                        Команда (Домашняя)
                        <input
                            {...register("homeTeam")}
                            className='addnews-input'/>
                    </label>
                    <label className="d-flex justify-content-between">
                        Город (Домашняя)
                        <input
                            {...register("homeCity")}
                            className='addnews-input'/>
                    </label>
                    <label className="d-flex justify-content-between">
                        Лого (Гостевая)
                        <input
                            {...register("guestLogo")}
                            className='addnews-input'/>
                    </label>
                    <label className="d-flex justify-content-between">
                        Команда (Гостевая)
                        <input
                            {...register("guestTeam")}
                            className='addnews-input'/>
                    </label>
                    <label className="d-flex justify-content-between">
                        город (Гостевая)
                        <input
                            {...register("guestCity")}
                            className='addnews-input'/>
                    </label>
                    <label className="d-flex justify-content-between">
                        Дата
                        <input
                            {...register("date")}
                            className='addnews-input'/>
                    </label>
                    <label className="d-flex justify-content-between">
                        Лига
                        <input
                            {...register("league")}
                            className='addnews-input'/>
                    </label>
                    <label className="d-flex justify-content-between">
                        Место
                        <input
                            {...register("place")}
                            className='addnews-input'/>
                    </label>
                    <label className="d-flex justify-content-between">
                        Фото ссылка
                        <input
                            {...register("photo")}
                            className='addnews-input'/>
                    </label>
                    <label className="d-flex justify-content-between">
                        Видео ссылка
                        <input
                            {...register("video")}
                            className='addnews-input'/>
                    </label>


                </div>
                <Button className='col-6 mt-4 ' variant="light" onClick={handleSubmit(sendEditChamp)}>Изменить</Button>
                {championshipStore.loaderNotification && (
                    <Notification text='Игра была успешно отредактирована' icon='check_circle'/>
                )}

            </div>
        </div>
    );
};

export default EditChamp;