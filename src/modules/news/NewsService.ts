import NewsApi from "./NewsApi";
import {INewsResponse, INews} from "./NewsTypes";
import {showAlert} from "../../components/customAlert/CustomAlert/showAlert";
import toast from "react-hot-toast";

export default class NewsService {
    newsApi: NewsApi;

    constructor() {
        this.newsApi = new NewsApi();
    }

    getAllNews = async (): Promise<INews[]> => {
        const { data } = await this.newsApi.getAllNews();
        console.log(data)
        return data.reverse();
    };
    getNews = async (id): Promise<INews> => {
        const { data } = await this.newsApi.getNews(id);
        return data;
    };

    deleteNews = async (id: string): Promise<INewsResponse> => {
        const { data } = await this.newsApi.deleteNews(id);
        toast.success('Новость была успешно удалена')
        return data;
    };

    editNews = async (newsData): Promise<INewsResponse> => {
        const { data } = await this.newsApi.editNews(newsData);
        toast.success('Новость была успешно отредактирована')
        return data;
    };

    addNews = async (newsData: INews): Promise<INewsResponse> => {
        const { data } = await this.newsApi.addNews(newsData);
        toast.success('Новость была успешно создана')
        return data;
    };
}