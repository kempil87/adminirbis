import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {api} from "../../../../base/axios";
import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useRootStore} from "../../../../base/hooks/useRootStore";
import {useForm} from "react-hook-form";
import Notification from "../../../../components/ui/Notification/Notification";
import {observer} from "mobx-react";

const EditNews = observer(() => {
    const {id} = useParams()
    const {newsStore} = useRootStore()
    const navigate = useNavigate();

    const {register, handleSubmit, setValue} = useForm();

    const setFormValues = () => {
        Object.keys(newsStore.newsItem).forEach((key) => {
            // @ts-ignore
            setValue(String(key), newsStore.newsItem[key])
        })
    }

    const sendEditNews = (data) => {
        newsStore.editNews(data)
        setTimeout(() => {
            navigate('/news')
        }, 1900)
    }

    useEffect(() => {
        newsStore.getNews(id).then(() => setFormValues())
    }, [])


    return (

        <div className="d-flex align-items-center  pt-5 flex-column ">
            <div className="w-50">
                <label className="d-flex  justify-content-between">
                    Название
                    <input
                        className='addnews-input'
                        {...register("title")}/>
                </label>

                <label className="d-flex  justify-content-between">
                    Дата
                    <input
                        className='addnews-input'
                        {...register("date")}/>
                </label>

                <label className="d-flex  justify-content-between">
                    Картинка (url)
                    <input
                        className='addnews-input'
                        {...register("image")}/>
                </label>

                <label className="d-flex  justify-content-between">
                    Значок
                    <input
                        className='addnews-input'
                        {...register("badge")}/>
                </label>

                <label className="d-flex  justify-content-between">
                    Ссылка
                    <input
                        className='addnews-input'
                        {...register("source")}/>
                </label>

                <label className="d-flex  justify-content-between">
                    Тег
                    <input
                        className='addnews-input'
                        {...register("tag")}/>
                </label>

                <label className="d-flex justify-content-between ">
                    Описание
                    <input
                        className='addnews-input'
                        {...register("subtitle")}/>
                </label>
                <label className="d-flex justify-content-between ">
                    крат.Описание
                    <input
                        className='addnews-input'
                        {...register("shortSubTitle")}/>
                </label>
                <Button className='mt-5  ' variant="light" onClick={handleSubmit(sendEditNews)}>Сохранить</Button>
                {newsStore.loaderNotification && (
                    <Notification text='Товар был успешно отредактирован' icon='check_circle'/>
                )}
            </div>
        </div>
    );
});

export default EditNews;