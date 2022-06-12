import {api} from "../../base/axios"
import {IShop} from "./ShopTypes";

export default class ShopApi {
    getAllShop = () => {
        return api.get("/products",);
    };

    deleteShop = (id: string) => {
        return api.get(`/products/delete/${id}`);
    };

    addShop = (data:IShop) => {
        return api.post(`/products/create`,data);
    };

    editShop = (data:IShop) => {
        console.log(33,data)
        return api.post(`/products/update`,data);
    };

    getShop = (id:string) => {
        return api.get(`/products/${id}`);
    };


}