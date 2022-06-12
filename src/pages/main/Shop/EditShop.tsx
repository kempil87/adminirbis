import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react";
import {useRootStore} from "../../../base/hooks/useRootStore";
import {useForm} from "react-hook-form";
import Notification from "../../../components/ui/Notification/Notification";

const EditShop = observer(() => {
    const {id} = useParams()
    const {shopStore} = useRootStore()

    const {register, handleSubmit, setValue} = useForm();

    const setFormValues = () =>{
        Object.keys(shopStore.shop).forEach((key) => {
            // @ts-ignore
            setValue(String(key), shopStore.shop[key])
        })
    }

    const sendEditShop = (data) => {
        shopStore.editShop(data)
    }

    useEffect(() => {
        shopStore.getShop(id).then(() => setFormValues())
    }, [])

    return (
        <div className='d-flex align-items-center  pt-5 flex-column '>
            <div className="w-50">

                <label className="d-flex justify-content-between">
                    Название
                    <input
                        className='addnews-input'
                        {...register("name")}/>
                </label>

                <label className="d-flex justify-content-between">
                    Цена
                    <input
                        className='addnews-input'
                        {...register("price")}/>
                </label>

                <label className="d-flex justify-content-between">
                    Фото (url)
                    <input
                        className='addnews-input'
                        {...register("image")}/>
                </label>

                <label className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        Значок
                    </div>
                    <input
                        className='addnews-input'
                        {...register("badge")}/>
                </label>

                <label className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        Цена со скидкой
                    </div>
                    <input
                        className='addnews-input'
                        {...register("salePrice")}/>
                </label>

            </div>
            <Button className='mt-5 col-4' variant="light" onClick={handleSubmit(sendEditShop)}>Сохранить</Button>
            {shopStore.loaderNotification && (
                <Notification text='Товар был успешно отредактирован' icon='check_circle'/>
            )}
        </div>
    );
});

export default EditShop;