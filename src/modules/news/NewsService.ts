import NewsApi from "./NewsApi";
import {INewsResponse, INews} from "./NewsTypes";

export default class NewsService {
    newsApi: NewsApi;

    constructor() {
        this.newsApi = new NewsApi();
    }

    getNews = async (): Promise<INews[]> => {
        const { data } = await this.newsApi.getNews();
        return data.reverse();
    };

    deleteNews = async (id: string): Promise<INewsResponse> => {
        const { data } = await this.newsApi.deleteNews(id);
        return data;
    };

    addNews = async (newsData: INews): Promise<INewsResponse> => {
        const { data } = await this.newsApi.addNews(newsData);
        return data;
    };
}