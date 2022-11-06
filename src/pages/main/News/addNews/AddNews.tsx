import React from 'react';
import {FormProvider} from "react-hook-form";
import {observer} from "mobx-react";
import {CustomButton} from "../../../../components/customButton/CustomButton";
import {CustomPageHeader} from "../../../../components/pageHeader/CustomPageHeader";
import {CustomInput} from "../../../../components/form-elements/CustomInput";
import {CustomSelect} from "../../../../components/form-elements/CustomSelect";
import {useAddNews} from "./useAddNews";

const breadcrumbs = [{title: 'Новости' ,path:'/news'},{title: 'Создание новости'}]

const AddNews = observer(() => {
    const {clubStore,formMethods,createNews} = useAddNews();

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
                    <CustomButton className='max-w-[240px]' onClick={formMethods.handleSubmit(createNews)}>Создать</CustomButton>
                </div>
            </FormProvider>
        </>
    );
});


export default AddNews;