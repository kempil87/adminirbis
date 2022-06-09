import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import Notification from "../../components/ui/notification";
import {useState} from "react";
import {api} from "../../base/axios";

const AddShop = () => {
    const [shop, setShop] = useState({
        name: "",
        price: "",
        image: "",
        badge: "",
        salePrice: "",
    })

    const [showNote, setShowNote] = useState(false);

    const addShop = () => {
        if (!!shop.title && !shop.date && !shop.image) {
            alert('Заполните обязательные поля')
            return
        }

        api.post("/products/create", shop).then((res) => {
            setShowNote(true)
            setTimeout(() => {
                setShowNote(false)
                clearFields()
            }, 2000)

        })
    }

    const clearFields = () => {
        window.location.reload();
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
                            className='addnews-input'
                            value={shop.name}
                            onChange={(e) => setShop({...shop, name: e.target.value})}/>
                    </label>

                    <label className="d-flex justify-content-between">
                        Цена
                        <input
                            className='addnews-input'
                            value={shop.price}
                            onChange={(e) => setShop({...shop, price: e.target.value})}/>
                    </label>

                    <label className="d-flex justify-content-between">
                        Фото (url)
                        <input
                            className='addnews-input'
                            value={shop.image}
                            onChange={(e) => setShop({...shop, image: e.target.value})}/>
                    </label>

                    <label className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            Значок
                        </div>
                        <input
                            className='addnews-input'
                            value={shop.badge}
                            onChange={(e) => setShop({...shop, badge: e.target.value})}/>
                    </label>

                    <label className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            Цена со скидкой
                        </div>
                        <input
                            className='addnews-input'
                            value={shop.salePrice}
                            onChange={(e) => setShop({...shop, salePrice: e.target.value})}/>
                    </label>

                </div>
                <Button className='col-6 mt-4 ' variant="dark" onClick={addShop}>Создать</Button>
                {showNote && (
                    <Notification text='Товар был успешно добавлен' icon='check_circle'/>
                )}

            </div>
        </div>
    );
};

export default AddShop;