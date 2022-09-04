import {makeAutoObservable, runInAction} from "mobx";
import NewsService from "./NewsService";
import {INews} from "./NewsTypes";
import {IShop} from "../shop/ShopTypes";
import { format } from "date-fns";

export class NewsStore {
    loader: boolean = false;
    loaderNotification: boolean = false;

    news: INews[] = [];
    newsItem: INews | null = null;

    private newsService: NewsService;

    constructor() {
        makeAutoObservable(this);
        this.newsService = new NewsService();
    }

    getAllNews = async () => {
        this.setLoading(true)

        try {
            const res = await this.newsService.getAllNews();
            runInAction(() => {
                this.news = res;
            });
        } catch (e) {
            console.log("Error", e);
        } finally {
            this.setLoading(false);
        }
    };

    getNews = async (id:string) => {
        this.setLoading(true)

        try {
            const res = await this.newsService.getNews(id);
            runInAction(() => {
                this.newsItem = res;
            });
        } catch (e) {
            console.log("Error", e);
        } finally {
            this.setLoading(false);
        }
    };

    deleteNews = async (id: string) =>{
        try {
            const res = await this.newsService.deleteNews(id);

            if (res) {
                this.setLoadingNotification(true)
                runInAction(() => {
                    this.news = this.news.filter((n) => n._id !== id);
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

    addNews = async (data: INews) => {
        data.date = format( new Date(),'dd-MM-yyyy')
        console.log(data)
        try {
            const res = await this.newsService.addNews(data);

            if (res){
                this.getAllNews()
                this.setLoadingNotification(true)
            }
        } catch (e) {
            console.log("Error", e);
        } finally {
            setTimeout(() => {
                this.setLoadingNotification(false);
            }, 1800)
        }
    };

    editNews = async (data: INews) => {
        try {
            const res = await this.newsService.editNews(data);

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