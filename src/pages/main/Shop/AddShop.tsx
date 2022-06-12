import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import Notification from "../../../components/ui/Notification/Notification";
import {useRootStore} from "../../../base/hooks/useRootStore";
import {useForm} from "react-hook-form";
import {observer} from "mobx-react";

const AddShop = observer(() => {
    const {shopStore} = useRootStore();

    const {register, handleSubmit,formState: {errors}} = useForm();

    const addShop = (data) => {
        shopStore.addShop(data)
    }

    return (
        <div>
            <div className="align-items-center d-flex back-link">
                <span className="material-symbols-outlined chevron_right">chevron_right</span>
                <Link to="/shop" className="back">Назад</Link>
            </div>
            <div className="d-flex flex-column  align-items-center pt-5">

                <div className="col-6">

                    <label className="d-flex justify-content-between">
                        Название
                        <input
                            {...register("name", {min: 4})}
                            className='addnews-input'/>
                    </label>
                    {errors.name && (
                        <div>min length 4</div>
                    )}

                    <label className="d-flex justify-content-between">
                        Цена
                        <input
                            {...register("price")}
                            className='addnews-input'/>
                    </label>

                    <label className="d-flex justify-content-between">
                        Фото (url)
                        <input
                            {...register("image")}
                            className='addnews-input'/>
                    </label>

                    <label className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            Значок
                        </div>
                        <input
                            {...register("badge")}
                            className='addnews-input'/>
                    </label>

                    <label className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            Цена со скидкой
                        </div>
                        <input
                            {...register("salePrice")}
                            className='addnews-input'/>
                    </label>

                </div>
                <Button className='col-6 mt-4 ' variant="dark" onClick={handleSubmit(addShop)}>Создать</Button>
                {shopStore.loaderNotification && (
                    <Notification text='Товар был успешно добавлен' icon='check_circle'/>
                )}

            </div>
        </div>
    );
});

export default AddShop;