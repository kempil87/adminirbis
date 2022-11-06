import React from 'react';
import {FormProvider} from "react-hook-form";
import {observer} from "mobx-react";
import {CustomPageHeader} from "../../../../components/pageHeader/CustomPageHeader";
import {CustomInput} from "../../../../components/form-elements/CustomInput";
import {CustomSelect} from "../../../../components/form-elements/CustomSelect";
import {CustomButton} from "../../../../components/customButton/CustomButton";
import {useEditNews} from "./useEditNews";


const EditNews = observer(() => {
    const {formMethods, clubStore, editNews,breadcrumbs, id} = useEditNews()

    return (
        <>
            <CustomPageHeader breadcrumbs={breadcrumbs} title={`Редактирование новости ${id}`}/>

            <FormProvider {...formMethods}>
                <div className='flex space-y-3 flex-col'>
                    <CustomInput name='title' label='Название'/>
                    <img alt='Фото' src={formMethods.watch('image')} className='w-[230px] rounded-[10px] object-cover'/>
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
                    <CustomButton className='max-w-[240px]'
                                  onClick={formMethods.handleSubmit(editNews)}>Сохранить</CustomButton>
                </div>
            </FormProvider>
        </>
    );
});

export default EditNews;