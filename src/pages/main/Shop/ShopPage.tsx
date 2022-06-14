import React from 'react';
import {Link} from "react-router-dom";
import {IrbisLoader} from "../../../components/ui/Loaders/IrbisLoader";
import Notification from "../../../components/ui/Notification/Notification";
import {useState} from "react";
import {useEffect} from "react";
import {ShopCard} from "../../../components/cards/ShopCard/ShopCard";
import {observer} from "mobx-react";
import {useRootStore} from "../../../base/hooks/useRootStore";

const ShopPage = observer(() => {
    const {shopStore} = useRootStore();
    const [searchShop, setSearchShop] = useState('');

    const filterShop = shopStore.allShop.filter(shop => shop.name.toLowerCase().includes(searchShop.toLowerCase()))



    useEffect(() => {
        shopStore.getAllShop()
    }, [])

    return (
            <div className="pt-3 pb-5">
                <div className="d-flex justify-content-between align-items-center">
                    <Link className="d-flex align-items-center m-2" to="/shop/add"
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
                    {shopStore.loader ? (
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
                                    deleteShop={(id) => shopStore.deleteShop(id)}
                                    badge={m.badge}
                                    price={m.price}
                                />
                            ))}
                        </>
                    )}
                </div>

                {shopStore.loaderNotification && (
                    <Notification text='Товар был успешно удален' icon='check_circle'/>
                )}
            </div>
    );
});

export default ShopPage;