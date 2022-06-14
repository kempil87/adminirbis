import * as React from "react";
import {AuthStore} from "../modules/auth/AuthStore";
import {NewsStore} from "../modules/news/NewsStore";
import {ShopStore} from "../modules/shop/ShopStore";
import {MediaStore} from "../modules/media/MediaStore";
import {ClubStore} from "../modules/club/ClubStore";

class RootStore {
    authStore: AuthStore;
    newsStore: NewsStore;
    shopStore: ShopStore;
    mediaStore: MediaStore;
    clubStore: ClubStore;

    constructor() {
        this.authStore = new AuthStore();
        this.newsStore = new NewsStore();
        this.shopStore = new ShopStore();
        this.mediaStore = new MediaStore();
        this.clubStore = new ClubStore();
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