import {api} from "../../base/axios"
import {INews} from "./NewsTypes";

export default class NewsApi {
    getNews = () => {
        return api.get("/news",);
    };

    deleteNews = (id: string) => {
        return api.get(`/news/delete/${id}`,);
    };

    addNews = (data: INews) => {
        return api.post(`/news/create`,data);
    };
}