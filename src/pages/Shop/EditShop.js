import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {api} from "../../base/axios";
import {Button} from "react-bootstrap";

const EditShop = () => {

    const {id} = useParams()
    const navigate = useNavigate();

    const [shop, setShop] = useState({});

    const getShop = () => {
        api.get(`/products/${id}`).then((res) =>{
            setShop(res.data)
        })
    }

    const sendEditShop = () =>{
        api.post(`/products/update`, shop).then((res) =>{
            navigate('/shop');

        })
    }

    useEffect(() => {
        getShop()
    }, [id])

    return (
        <div className='d-flex align-items-center  pt-5 flex-column '>
            <div className="w-50">

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
            <Button className='mt-5 col-4' variant="light" onClick={sendEditShop}>Сохранить</Button>
        </div>
    );
};

export default EditShop;