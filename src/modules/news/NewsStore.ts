import {makeAutoObservable, runInAction} from "mobx";
import NewsService from "./NewsService";
import {INews} from "./NewsTypes";

export class NewsStore {
    loader: boolean = false;
    loaderNotification: boolean = false;

    news: INews[] = [];

    private newsService: NewsService;

    constructor() {
        makeAutoObservable(this);
        this.newsService = new NewsService();
    }

    getNews = async () => {
        this.setLoading(true)

        try {
            const res = await this.newsService.getNews();
            runInAction(() => {
                this.news = res;
            });
        } catch (e) {
            console.log("Error", e);
        } finally {
            this.setLoading(false);
        }
    };

    deleteNews = async (id: string) =>{
        const res = window.confirm("Вы действительно хотите удалить новость?")
        if (!res) {
            return
        }

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

        try {
            const res = await this.newsService.addNews(data);

            if (res){
                this.getNews()
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