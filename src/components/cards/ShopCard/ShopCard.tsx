import React from 'react';
import './ShopCard.css'
import {Link} from "react-router-dom";
import {IShop} from "../../../modules/shop/ShopTypes";


interface IShopCard extends IShop {
    deleteShop: (id:string) => void
}

export const ShopCard = ({price,badge,salePrice,image,_id,name,deleteShop}:IShopCard) => {
    return (
        <div  className="d-flex justify-content-between mt-3">
            <div className="d-flex shop_wrap">
                <div className="img-block">
                    <div className="img-wrap">
                        <img className="" width="180" height='180' src={image}/>
                    </div>
                </div>

                <div  className="m-2">
                    <h5 className=" shop_name" style={{fontWeight:500}}>{name}</h5>
                    <h5 className=" shop_badge" style={{fontWeight:500}}>{badge}</h5>
                    {salePrice ?(
                        <div className='d-flex align-items-center'>
                            <h6 className="m-2 shop_price" >{salePrice} ₽</h6>
                            <h6 className="m-2 shop_salePrice">{price} ₽</h6>

                        </div>
                    ):(
                        <h6 className="m-2 shop_price" style={{fontWeight:500}}>{price}  ₽</h6>
                    )}
                </div>
            </div>

            <div>
                <div onClick={() => deleteShop(_id)} style={{ cursor: "pointer"}} className="d-flex align-items-center change-item">
                    <div style={{fontWeight:300}} className="m-2" >Удалить</div>
                    <span className="material-symbols-outlined ">close</span>
                </div>
                <Link  to={`/editshop/${_id}`} style={{ cursor: "pointer",textDecoration:"none",color:"white"}}
                       className="d-flex align-items-center change-item">
                    <div style={{fontWeight:300}} className="m-2" >Редактировать</div>
                    <span className="material-symbols-outlined ">edit</span>
                </Link>
            </div>
        </div>
    );
};