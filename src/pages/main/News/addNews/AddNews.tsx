import React, {useEffect, useState} from 'react';
import Notification from "../../../../components/ui/Notification/Notification";
import "./AddNews.css"
import {Link, useNavigate} from "react-router-dom";
import {FormProvider, useForm} from "react-hook-form";
import {observer} from "mobx-react";
import {useRootStore} from "../../../../base/hooks/useRootStore";
import {api} from "../../../../base/axios";
import Form from 'react-bootstrap/Form';
import {Select, Button} from "antd";
import {CustomButton} from "../../../../components/customButton/CustomButton";
import {CustomPageHeader} from "../../../../components/pageHeader/CustomPageHeader";
import {CustomInput} from "../../../../components/form-elements/CustomInput";
import {CustomSelect} from "../../../../components/form-elements/CustomSelect";

const breadcrumbs = [{title: 'Новости' ,path:'/news'},{title: 'Создание новости'}]

const AddNews = observer(() => {
    const {newsStore, clubStore} = useRootStore();
    const nav = useNavigate()
    const formMethods = useForm();
    const {handleSubmit, reset} = formMethods

    const createNews = async (data) => {
        await newsStore.addNews(data)
        reset()
        nav(`/news`)
    }

    useEffect(() => {
        clubStore.getAllClub()
    }, [])

    return (
        <>
            <CustomPageHeader breadcrumbs={breadcrumbs} title={'Создание новости'}/>

            <FormProvider {...formMethods}>
                <div className='flex space-y-3 flex-col'>
                    <CustomInput name='title' label='Название'/>
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
                    <CustomButton className='max-w-[240px]' onClick={handleSubmit(createNews)}>Создать</CustomButton>
                </div>
            </FormProvider>
        </>
    );
});


export default AddNews;