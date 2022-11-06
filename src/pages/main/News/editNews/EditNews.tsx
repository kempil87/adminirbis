import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button, Select} from 'antd';
import {useNavigate} from 'react-router-dom';
import {useRootStore} from "../../../../base/hooks/useRootStore";
import {FormProvider, useForm} from "react-hook-form";
import Notification from "../../../../components/ui/Notification/Notification";
import {observer} from "mobx-react";
import {api} from "../../../../base/axios";
import {CustomPageHeader} from "../../../../components/pageHeader/CustomPageHeader";
import {CustomInput} from "../../../../components/form-elements/CustomInput";
import {CustomSelect} from "../../../../components/form-elements/CustomSelect";
import {CustomButton} from "../../../../components/customButton/CustomButton";

const breadcrumbs = [{title: 'Новости' ,path:'/news'},{title: 'Редактирование новости'}]

const EditNews = observer(() => {
    const {id} = useParams()
    const {newsStore, clubStore} = useRootStore();
    const navigate = useNavigate()
    const formMethods = useForm();
    const {handleSubmit, setValue,watch} = formMethods

    const setFormValues = () => {
        Object.keys(newsStore.newsItem).forEach((key) => {
            setValue(String(key), newsStore.newsItem[key])
        })
    }

    const editNews = (data) => {
        newsStore.editNews(data)
        setTimeout(() => {
            navigate('/news')
        }, 1000)
    }

    useEffect(() => {
        clubStore.getAllClub()
        newsStore.getNews(id).then(() => setFormValues())
    }, [])


    return (
        <>
            <CustomPageHeader breadcrumbs={breadcrumbs} title={`Редактирование новости ${id}`}/>

            <FormProvider {...formMethods}>
                <div className='flex space-y-3 flex-col'>
                    <CustomInput name='title' label='Название'/>
                    <img alt='Фото' src={watch('image')} className='w-[230px] rounded-[10px] object-cover'/>
                    <CustomInput name='image' label=' Фото (url)'/>
                    <CustomInput name='badge' label='Значок'/>
                    <CustomSelect
                        name='link'
                        label='Ссылка'
                        options={clubStore.allClub}
                    />
                    <CustomInput name='tag' label='Тэг'/>
                    <CustomInput name='subtitle' label='Описание'/>
                    <CustomInput name='shortSubTitle' label='крат.Описание'/>
                    <CustomButton className='max-w-[240px]' onClick={handleSubmit(editNews)}>Создать</CustomButton>
                </div>
            </FormProvider>
        </>
    );
});

export default EditNews;