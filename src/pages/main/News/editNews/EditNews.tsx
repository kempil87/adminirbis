import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button} from 'antd';
import {useNavigate} from 'react-router-dom';
import {useRootStore} from "../../../../base/hooks/useRootStore";
import {useForm} from "react-hook-form";
import Notification from "../../../../components/ui/Notification/Notification";
import {observer} from "mobx-react";
import {api} from "../../../../base/axios";

const EditNews = observer(() => {
    const {id} = useParams()
    const {newsStore} = useRootStore()
    const navigate = useNavigate();
    const [clubLink,setClubLink] = useState([])
    const [link,setLink] = useState('')

    const {register, handleSubmit, setValue} = useForm();

    const setFormValues = () => {
        Object.keys(newsStore.newsItem).forEach((key) => {
            // @ts-ignore
            setValue(String(key), newsStore.newsItem[key])
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

        <div className="d-flex  pt-5 flex-column ">
            <div className="w-50">
                <label className="d-flex ">
                    <input
                        className='addnews-input'
                        placeholder='Название'
                        {...register("title")}/>
                </label>

                <label className="d-flex mt-3">
                    <input
                        className='addnews-input'
                        placeholder='Дата'
                        {...register("date")}/>
                </label>

                <label className="d-flex mt-3">
                    <input
                        className='addnews-input'
                        placeholder='Картинка (url)'
                        {...register("image")}/>
                </label>

                <label className="d-flex  mt-3">
                    <input
                        className='addnews-input'
                        placeholder=' Значок'
                        {...register("badge")}/>
                </label>

                <label className="d-flex   mt-3">
                    <select
                        style={{ width:'100%' }}
                        placeholder='Ссылка'
                        onChange={handleChange}
                        defaultValue={''}
                        className='addnews-input'
                        {...register("source")}
                    >
                        <option  value={''} disabled>Выберите игрока,тренера...</option>
                        {clubLink.map((i) => (
                            <option value={i._id} key={i._id}>{i?.name}</option>
                        ))}
                    </select>
                </label>

                <label className="d-flex  justify-content-between mt-3">
                    <input
                        className='addnews-input'
                        placeholder='Тег'
                        {...register("tag")}/>
                </label>

                <label className="d-flex justify-content-between mt-3">
                    <textarea

                        className='addnews-text-area'
                        placeholder='Описание'
                        {...register("subtitle")}/>
                </label>
                <label className="d-flex justify-content-between mt-3">
                    <textarea
                        className='addnews-text-area'
                        placeholder='крат.Описание'
                        {...register("shortSubTitle")}/>
                </label>
                <Button  style={{color:"white",backgroundColor:"rgb(78,168,246)",border:"none"}}  className='mt-5 w-100' onClick={handleSubmit(sendEditNews)}>Сохранить</Button>

                {newsStore.loaderNotification && (
                    <Notification text='Новость была успешно отредактирована' icon='check_circle'/>
                )}
            </div>
        </div>
    );
});

export default EditNews;