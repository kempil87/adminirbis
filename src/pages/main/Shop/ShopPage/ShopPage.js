import React from 'react';
import {Link} from "react-router-dom";
import {IrbisLoader} from "../../../../components/ui/Loaders/IrbisLoader";
import Notification from "../../../../components/ui/notification";
import {useState} from "react";
import {api} from "../../../../base/axios";
import {useEffect} from "react";
import {ShopCard} from "../../../../components/cards/ShopCard/ShopCard";

const ShopPage = () => {

    const [shop, setShop] = useState([]);
    const [loader, setLoader] = useState(true);
    const [loaderDelete, setLoaderDelete] = useState(false);
    const [searchShop, setSearchShop] = useState('');

    const filterShop = shop.filter(shop =>{
        return shop.name.toLowerCase().includes(searchShop.toLowerCase())
    })
    const getAllShop = (isDelete) => {
        api.get('/products').then((res) => {
            setTimeout(() => {
                setShop(res.data.reverse())
                setLoader(false)
            }, isDelete ? 0 : 1000)
        })
    }

    const deleteShop = (id) => {
        const res = window.confirm("Вы действительно хотите удалить ?")
        if (!res) {
            return
        }

        setLoaderDelete(true)
        api.get(`/products/delete/${id}`).then((res) => {
            getAllShop(true)
            setTimeout(() => {
                setLoaderDelete(false)
            }, 1800)
        })
    }

    useEffect(() => {
        getAllShop(false)
    }, [])

    return (
            <div className="pt-3 mb-5">
                <div className="d-flex justify-content-between align-items-center">
                    <Link className="d-flex align-items-center m-2" to="/addshop"
                          style={{fontWeight: 300, textDecoration: "none", color: "gold"}} >
                        Добавить Товар
                        <span style={{color: "gold"}} className="material-symbols-outlined m-2">add_circle</span>
                    </Link>
                    <form className='d-flex align-items-center position-relative'>
                        <span style={{fontWeight:200}} className="material-symbols-outlined position-absolute">search</span>
                        <input
                            value={searchShop}
                            className='search-club'
                            placeholder='Поиск'
                            type='text'
                            onChange={(e) =>setSearchShop(e.target.value)}
                        />
                        {searchShop &&(
                            <span onClick={() =>setSearchShop('')} style={{fontWeight:200,right:0,cursor:"pointer",zIndex:605}} className="material-symbols-outlined position-absolute">clear</span>
                        )}
                    </form>

                </div>
                <div className="d-flex flex-column">
                    {loader ? (
                        <IrbisLoader/>
                    ) : (
                        <>
                            {filterShop.map(m => (
                                <ShopCard
                                    salePrice={m.salePrice}
                                    key={m._id}
                                    name={m.name}
                                    image={m.image}
                                    _id={m._id}
                                    deleteShop={(id) => deleteShop(id)}
                                    badge={m.badge}
                                    price={m.price}
                                />
                            ))}
                        </>
                    )}
                </div>

                {loaderDelete && (
                    <Notification text='Товар был успешно удален' icon='check_circle'/>
                )}
            </div>
    );
};

export default ShopPage;