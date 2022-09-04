import React, {useEffect, useState} from 'react';
import Notification from "../../../../components/ui/Notification/Notification";
import "./AddNews.css"
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {observer} from "mobx-react";
import {useRootStore} from "../../../../base/hooks/useRootStore";
import {api} from "../../../../base/axios";
import Form from 'react-bootstrap/Form';
import {Select,Button} from "antd";
const { Option } = Select;

const AddNews = observer(() => {
    const [clubLink,setClubLink] = useState([])
    const [link,setLink] = useState('')
    const {newsStore} = useRootStore();
    const nav = useNavigate()

    const {register, handleSubmit, reset} = useForm();

    const addNews = (data) => {
        data.source === link
        newsStore.addNews(data).then((res) =>{
            reset()
            nav(`/news`)
        })
    }

    const handleChange = (value:string) => {
        console.log(value)
        setLink(value)
    }

    useEffect(() => {
        api.get("/club").then((res) => {
            setClubLink(res.data)
        })
    }, [])
    return (
        <>
            <div className="align-items-center d-flex back-link mt-3">
                <span className="material-symbols-outlined chevron_right">chevron_right</span>
                <Link to="/news" className="back">Назад</Link>
            </div>
            <div className="d-flex flex-column  pt-5">
                <div className="col-6">
                    <label className="d-flex justify-content-between mt-4">
                        <input
                            className='addnews-input'
                            placeholder=' Название'
                            {...register("title")} />
                    </label>

                    <label className="d-flex justify-content-between mt-4">
                        <input
                            className='addnews-input'

                            placeholder=' Фото (url)'
                            {...register("image")}/>
                    </label>

                    <label className="d-flex justify-content-between mt-4">
                        <input
                            className='addnews-input'
                            placeholder='Значок'
                            {...register("badge")}/>
                    </label>

                    <label className="d-flex justify-content-between mt-4">
                        {/*@ts-ignore*/}
                            <select
                                style={{ width:'100%' }}
                                placeholder=' Ссылка'
                                defaultValue={link || ''}
                                onChange={handleChange}
                                className='addnews-input'
                                {...register("source")
                            }
                            >
                                <option  value={''} disabled>Выберите игрока,тренера...</option>
                                {clubLink.map((i) => (
                                    <option value={i._id} key={i._id}>{i?.name}</option>
                                ))}
                            </select>

                    </label>

                    <label className="d-flex justify-content-between mt-4">
                        <input
                            className='addnews-input'
                            placeholder='Тег'
                            {...register("tag")}/>
                    </label>

                    <label className="d-flex justify-content-between mt-4">
                        <input
                            className='addnews-input'
                            placeholder=' Описание'
                            {...register("subtitle")}/>
                    </label>
                    <label className="d-flex justify-content-between mt-4">
                        <input
                            className='addnews-input'
                            placeholder='крат.Описание'
                            {...register("shortSubTitle")}/>
                    </label>
                </div>


                <Button
                    className='col-6 mt-4'
                    style={{color:"white",backgroundColor:"rgb(78,168,246)",border:"none"}}
                    onClick={handleSubmit(addNews)}
                >Создать</Button>

                {newsStore.loaderNotification && (
                    <Notification text='Новость была успешно добавлена' icon='check_circle'/>
                )}

            </div>

            {/*<div>*/}
            {/*    <h5>Список ссылок</h5>*/}
            {/*    <div>*/}
            {/*        {clubLink.map((i)=>(*/}
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