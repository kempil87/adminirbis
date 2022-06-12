import * as React from "react";
import {AuthStore} from "../modules/auth/AuthStore";
import {NewsStore} from "../modules/news/NewsStore";
import {ShopStore} from "../modules/shop/ShopStore";

class RootStore {
    authStore: AuthStore;
    newsStore: NewsStore;
    shopStore: ShopStore;

    constructor() {
        this.authStore = new AuthStore();
        this.newsStore = new NewsStore();
        this.shopStore = new ShopStore();
    }

    sync = async () => {
        await Promise.all(
            Object.values(this).map(store => {
                return store?.sync ? store?.sync() : Promise.resolve();
            }),
        );
    };
}

const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);