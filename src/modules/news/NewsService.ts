import NewsApi from "./NewsApi";
import {INewsResponse, INews} from "./NewsTypes";

export default class NewsService {
    newsApi: NewsApi;

    constructor() {
        this.newsApi = new NewsApi();
    }

    getAllNews = async (): Promise<INews[]> => {
        const { data } = await this.newsApi.getAllNews();
        return data.reverse();
    };
    getNews = async (id): Promise<INews> => {
        const { data } = await this.newsApi.getNews(id);
        return data;
    };

    deleteNews = async (id: string): Promise<INewsResponse> => {
        const { data } = await this.newsApi.deleteNews(id);
        return data;
    };

    editNews = async (newsData): Promise<INewsResponse> => {
        const { data } = await this.newsApi.editNews(newsData);
        return data;
    };

    addNews = async (newsData: INews): Promise<INewsResponse> => {
        const { data } = await this.newsApi.addNews(newsData);
        return data;
    };
}