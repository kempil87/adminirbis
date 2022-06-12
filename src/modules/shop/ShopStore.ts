import {makeAutoObservable, runInAction} from "mobx";
import ShopService from "./ShopService";
import {IShop} from "./ShopTypes";

export class ShopStore {
    loader: boolean = false;
    loaderNotification: boolean = false;

    allShop: IShop[] = [];
    shop: IShop | null = null;

    private shopService: ShopService;

    constructor() {
        makeAutoObservable(this);
        this.shopService = new ShopService();
    }

    getAllShop = async () => {
        this.setLoading(true)

        try {
            const res = await this.shopService.getAllShop();
            runInAction(() => {
                this.allShop = res;
            });
        } catch (e) {
            console.log("Error", e);
        } finally {
            this.setLoading(false);
        }
    };

    deleteShop = async (id: string) => {
        const res = window.confirm("Вы действительно хотите удалить ?")
        if (!res) {
            return
        }

        try {
            const res = await this.shopService.deleteShop(id);

            if (res) {
                this.setLoadingNotification(true)
                runInAction(() => {
                    this.allShop = this.allShop.filter((n) => n._id !== id);
                });
            }
        } catch (e) {
            console.log("Error", e);
        } finally {
            setTimeout(() => {
                this.setLoadingNotification(false);
            }, 1800)
        }
    }

    addShop = async (data: IShop) => {
        try {
            const res = await this.shopService.addShop(data);

            if (res) {
                this.setLoadingNotification(true)
                this.getAllShop()
            }
        } catch (e) {
            console.log("Error", e);
        } finally {
            setTimeout(() => {
                window.location.reload();
                this.setLoadingNotification(false);
            }, 1800)
        }
    }

    editShop = async (data: IShop) => {
        try {
            const res = await this.shopService.editShop(data);

            if (res) {
                this.setLoadingNotification(true)
            }
        } catch (e) {
            console.log("Error", e);
        } finally {
            setTimeout(() => {
                this.setLoadingNotification(false);
            }, 1800)
        }
    }

    getShop = async (id: string) => {
        this.setLoading(true)

        try {
            const res = await this.shopService.getShop(id);
            runInAction(() => {
                this.shop = res;
            });
        } catch (e) {
            console.log("Error", e);
        } finally {
            this.setLoading(false);
        }
    };

    setLoading = (value: boolean) => {
        runInAction(() => {
            this.loader = value;
        });
    };

    setLoadingNotification = (value: boolean) => {
        runInAction(() => {
            this.loaderNotification = value;
        });
    };
}