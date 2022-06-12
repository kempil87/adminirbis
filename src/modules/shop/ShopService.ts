import ShopApi from "./ShopApi";
import {IShop, IShopResponse} from "./ShopTypes";

export default class ShopService {
    shopApi: ShopApi;

    constructor() {
        this.shopApi = new ShopApi();
    }

    getAllShop = async (): Promise<IShop[]> => {
        const { data } = await this.shopApi.getAllShop();
        return data.reverse();
    };

    deleteShop = async (id: string): Promise<IShopResponse> => {
        const { data } = await this.shopApi.deleteShop(id);
        return data;
    };

    addShop = async (shopData): Promise<IShopResponse> => {
        const { data } = await this.shopApi.addShop(shopData);
        return data;
    };
    editShop = async (shopData): Promise<IShopResponse> => {
        const { data } = await this.shopApi.editShop(shopData);
        return data;
    };

    getShop = async (id): Promise<IShop> => {
        const { data } = await this.shopApi.getShop(id);
        return data;
    };

}